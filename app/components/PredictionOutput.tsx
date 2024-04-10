export default function PredictionOutput() {
    return (
        <>
        <div className="flex flex-col h-full w-full">
            <div className="h-2/3 w-full mt-10">
            <div className="flex items-center h-full flex-row gap-5">
                <div className="h-2/3 w-1/2 flex flex-col">
                    <h1 className=" text-lg font-bold flex items-center justify-center mb-3">Likely to show up</h1>
                    <div className="flex items-center justify-center">
                    <ul className="flex flex-col gap-2 max-h-60 overflow-y-scroll">
                            <li>Ramesh Parikar</li>
                            <li>Sumit</li>
                            <li>Ravindra</li>
                            <li>Ravindra</li>
                        </ul>
                    </div>
                </div>
                <span className="w-1 h-3/4 bg-slate-500 rounded-lg"></span>
                <div className="h-2/3 w-1/2 flex flex-col">
                    <h1 className=" text-lg font-bold flex items-center justify-center mb-3">Might won't show up</h1>
                    <div className="flex items-center justify-center">
                    <ul className="flex flex-col gap-2 overflow-auto">
                            <li>Sumit</li>
                            <li>Ravindra</li>
                            <li>Khuspreet</li>
                            <li>Ramesh Parikar</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
                <button className="p-3 w-1/3 bg-slate-200 rounded-md">Download Results</button>
                <button className="p-3 w-1/3 bg-slate-200 rounded-md">View Analytics</button> 
            </div>
            </div>
        </>
    )
}