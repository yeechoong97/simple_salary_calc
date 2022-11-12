const Records = () => {

    const data = window.sessionStorage.getItem("result");
    console.log(JSON.parse(data!));
    //Todo Put a summary of total and a full details below of the summary
    return (
        <div className="flex flex-col space-y-3 pt-5">
            <div className="flex px-10 mt-5 space-x-5 text-lg">
                <span className="w-28">Name: </span>
                <span>SEE YEE CHOONG</span>
            </div>
            <div className="flex px-10  space-x-5 text-lg">
                <span className="w-28">Start Date: </span>
                <span>1/11/2022</span>
            </div>
            <div className="flex px-10 space-x-5 text-lg">
                <span className="w-28">End Date: </span>
                <span>11/11/2022</span>
            </div>
            <div className="flex px-10 space-x-5 text-lg">
                <span className="w-28">Date Time: </span>
                <span>11/11/2022 11:23 PM</span>
            </div>
            <div className='w-full overflow-x-auto rounded-tr-lg px-10 py-10'>
                <table className="w-full text-sm text-left text-slate-600 table-auto border">
                    <thead className=" text-slate-700 uppercase bg-slate-100 border-b sticky top-0">
                        <tr className='divide-x'>
                            <th scope="col" className="py-2 px-3">
                                Date
                            </th>
                            <th scope="col" className="py-2 px-3">
                                Total Working Duration
                            </th>
                            <th scope="col" className="py-2 px-3">
                                Lunch Break Duration
                            </th>
                            <th scope="col" className="py-2 px-3">
                                Dinner Break Duration
                            </th>
                            <th scope="col" className="py-2 px-3">
                                Net Working Duration
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className="bg-white border-b hover:bg-slate-200 hover:cursor-pointer divide-x hover:divide-slate-300 hover:border-slate-300 hover:border-t hover:border-r">
                            <td className="py-3 px-3">
                                11/11/2022
                            </td>
                            <td className="py-3 px-3">
                                3000
                            </td>
                            <td className="py-3 px-3">
                                200
                            </td>
                            <td className="py-3 px-3">
                                300
                            </td>
                            <td className="py-3 px-3">
                                2001
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Records