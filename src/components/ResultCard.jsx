export default function ResultCard({ result }){
    if (!result) return (
        <div className="card w-full shadow bg-base-200 animate-pulse">
            <div className="card-body">
                <p className="text-center">Waiting for prediction</p>
            </div>
        </div>
    )

    if (result.material){
        return(
            <div className="card w-full shadow-lg bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">Material: {result.material}</h2>
                    <p>Confidence: {(result.confidence * 100).toFixed}%</p>
                </div>
            </div>
        )
    }
    return (
        <pre className="bg-base-200 p-4 rounded-xl overflow-x-auto text-sm">{JSON.stringify(result, null, 2)}</pre>
    )
}