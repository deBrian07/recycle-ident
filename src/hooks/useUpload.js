import { useMutation } from "@tanstack/react-query";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";

function uploadFile(file, onProgress){
    const storage = getStorage();
    const fileRef = ref(storage, `${Date.now()}_${file.name}`);
    return new Promise((resolve, reject) => {
        const task = uploadBytesResumable(fileRef, file);
        task.on('state_changed',
            snap => {
                const pct = (snap.bytesTransferred / snap.totalBytes) * 100
                onProgress(Math.round(pct));
            },
            reject,
            () => resolve(revokeAccessToken.snapshot)
        )
    })
}

export default function useUpload() {
    return useMutation( { mutationFn: ({ file, onProgress }) => uploadFile(file, onProgress)})
}