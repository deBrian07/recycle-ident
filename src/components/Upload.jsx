import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import useUpload from "../hooks/useUpload";

export default function Upload({ accept, color = 'primary', onResult}) {
    const [progress, setProgress] = useState(0);
    const [result, setResult] = useState(null);
    const { mutateAsync: upload, isLoading, isError } = useUpload();

    const onDrop = useCallback(async files => {
        if (!files?.length) return;
        const [file] = files;
        try {
            await upload({ file, onProgress: setProgress});

            const body = new FormData();
            body.append('file', file);
            const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/predict`, {
                method: 'POST',
                body
            })

            if (res.ok) {
                const predictionResult = await res.json();
                setResult(predictionResult);
                onResult?.(predictionResult);
            }
        } catch (error){
            console.error('Upload or prediction failed: ', error);
        }
    }, [upload, onResult])


    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept});

    return (
        <div className="space-y-4">
            <div {...getRootProps()} className="border-2 border-dashed rounded-xl p-6 text-center cursor-pointer hover:shadow-lg transition">
                <input {...getInputProps()} />
                <p>{isDragActive ? "Drop it!": "Drag & Drop or click to select"}</p>


                {isLoading && (
                    <progress className={`progress progress-${color} w-full mt-4`} value={progress} max="100">
                        {progress}%
                    </progress>
                )}
                {isError && <p className="text-red-500 mt-2">Upload failed...</p>}
            </div>

            {result && (
                <div className="card w-full shadow-lg bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">
                            {result.material && `Material: ${result.material}`}
                        </h2>
                        <p>Confidence: {(result.confidence * 100).toFixed(0)}%</p>
                    </div>
                </div>
            )}
        </div>
    );
}