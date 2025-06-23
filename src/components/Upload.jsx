import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import useUpload from "../hooks/useUpload";

export default function Upload({ accept, color = 'primary'}) {
    const [progress, setProgress] = useState(0);
    const { mutateAsync: upload, isLoading, isError } = useUpload();

    const onDrop = useCallback(async files => {
        if (!files?.length) return;
        const [file] = files;
        try{ await upload({ file, onProgress: setProgress})}
        catch { /* error*/} 
    }, [upload])


    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept});

    return (
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
    )
}