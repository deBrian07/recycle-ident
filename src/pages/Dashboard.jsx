import { useState } from 'react';
import ResultCard from '../components/ResultCard';
import Upload from '../components/Upload';

export default function Dashboard() {
    const [result, setResult] = useState(null);

    async function handlePredict(file) {
        const body = new FormData();
        body.append('file', file);
        const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/predict`, {
            method: 'POST',
            body
        });

        const json = await res.json();
        setResult(json);
    }

    return (
        <div className='space-y-6 p-8'>
            <Upload accept={{'image/*': []}} onResult={handlePredict} />
            <ResultCard result={result} />
        </div>
    )
}