export default function InputForm() {
    return (
        <>
            <form action="submit" className="h-full w-full flex flex-col items-center justify-center gap-5">
                <input type="text" placeholder="Full Name" className=" p-2 w-2/3 rounded-md font-inherit outline-none " />
                <input type="number" placeholder="Age" className=" outline-none p-2 w-2/3 rounded-md font-inherit" />
                <div className="flex flex-col gap-5">
                <div className="flex items-start gap-5">
                    <label className="flex items-center gap-3">
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            className="h-5 w-5"
                        />
                        Male
                    </label>
                    <label className="flex items-center gap-3">
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            className="h-5 w-5"
                        />
                        Female
                    </label>
                </div>

                <label className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        className="h-5 w-5 rounded"
                    />
                    Scholarship
                </label>
                <label className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        className="h-5 w-5 rounded"
                    />
                    Diabetes
                </label>
                <label className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        className="h-5 w-5 rounded"
                    />
                    Hypertension
                </label>
                <label className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        className="h-5 w-5 rounded"
                    />
                    Alcoholism
                </label>
                <label className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        className="h-5 w-5 rounded"
                    />
                    Handicap
                </label>
                <label className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        className="h-5 w-5 rounded"
                    />
                    SMS Received
                </label>
                </div>
                <button className="p-3 w-1/3 bg-slate-400 rounded-md">Predict</button>
                <button className="p-3 w-1/3 bg-slate-400 rounded-md">Or Upload CSV</button>
            </form>
        </>
    );
}