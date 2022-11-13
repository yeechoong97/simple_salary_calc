import moment from "moment";
import { useEffect, useState } from "react";
import { EmployeeProps, ResultProps } from "../interfaces";

const InitialData: EmployeeProps = {
    startDate: "",
    endDate: "",
    name: "",
}

const Records = () => {
    const [data, setData] = useState<ResultProps[]>([]);
    const [employee, setEmployee] = useState<EmployeeProps>(InitialData);
    const currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");

    useEffect(() => {
        const populateData = () => {
            // Handle the result
            const sessionData = window.sessionStorage.getItem("result");
            console.log(sessionData);
            const parsedData: ResultProps[] = JSON.parse(sessionData!);
            setData(parsedData);

            // Handle Employee Data
            const empSessionData = window.sessionStorage.getItem("employee");
            console.log(empSessionData);
            const parsedEmpData: EmployeeProps = JSON.parse(empSessionData!);
            setEmployee(parsedEmpData);
        }

        return () => populateData();
    }, []);

    const changeTimeFormat = (time: number): string => {
        let hours = parseInt((time / 60).toString());
        let minutes = time - (hours * 60);
        let outputFormatter = "";

        if (time === 0) {
            outputFormatter = "-";
        }
        else if (hours < 1) {
            outputFormatter = `${minutes} Min${minutes > 1 ? 's' : ''}`;
        }
        else {
            outputFormatter = `${hours} Hour${hours > 1 ? 's' : ''} ${minutes} Min${minutes > 1 ? 's' : ''}`
        }
        return outputFormatter;
    }

    return (
        <div className="flex flex-col space-y-3">
            <div className="flex px-14 mt-5 space-x-5 text-base">
                <span className="w-28">Name: </span>
                <span>{employee.name}</span>
            </div>
            <div className="flex px-14  space-x-5 text-base">
                <span className="w-28">Start Date: </span>
                <span>{employee.startDate}</span>
            </div>
            <div className="flex px-14 space-x-5 text-base">
                <span className="w-28">End Date: </span>
                <span>{employee.endDate}</span>
            </div>
            <div className="flex px-14 space-x-5 text-base">
                <span className="w-28">Date Time: </span>
                <span>{currentDate}</span>
            </div>

            {/* Summary */}
            <div className='w-full overflow-x-auto rounded-tr-lg px-14 pb-5 pt-2'>
                <table className="w-full text-sm text-left text-slate-600 table-auto border">
                    <thead className=" text-slate-700 uppercase  border-b sticky top-0">
                        <tr className='divide-x'>
                            <th scope="col" className="py-2 px-3">
                                Total Working
                            </th>
                            <th scope="col" className="py-2 px-3">
                                Total Lunch Break
                            </th>
                            <th scope="col" className="py-2 px-3">
                                Total Dinner Break
                            </th>
                            <th scope="col" className="py-2 px-3">
                                Net Working
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b  divide-x ">
                            <td className="py-2 px-3">
                                {changeTimeFormat(data.reduce((prev, curr) =>
                                    prev + curr.totalWorkingTime, 0
                                ))}
                            </td>
                            <td className="py-2 px-3">
                                {changeTimeFormat(data.reduce((prev, curr) =>
                                    prev + curr.noonRestTime, 0
                                ))}
                            </td>
                            <td className="py-2 px-3">
                                {changeTimeFormat(data.reduce((prev, curr) =>
                                    prev + curr.nightRestTime, 0
                                ))}
                            </td>
                            <td className="py-2 px-3">
                                {changeTimeFormat(data.reduce((prev, curr) =>
                                    prev + (curr.totalWorkingTime - curr.noonRestTime - curr.nightRestTime), 0
                                ))}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Result */}
            <div className='w-full overflow-x-auto rounded-tr-lg px-14'>
                <table className="w-full text-sm text-left text-slate-600 table-auto border">
                    <thead className=" text-slate-700 uppercase  border-b sticky top-0">
                        <tr className='divide-x'>
                            <th scope="col" className="py-2 px-3">
                                Date
                            </th>
                            <th scope="col" className="py-2 px-3">
                                Total Working
                            </th>
                            <th scope="col" className="py-2 px-3">
                                Lunch Break
                            </th>
                            <th scope="col" className="py-2 px-3">
                                Dinner Break
                            </th>
                            <th scope="col" className="py-2 px-3">
                                Net Working
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map(value => (
                            <tr className="bg-white border-b  divide-x ">
                                <td className="py-2 px-3">
                                    {value.date}
                                </td>
                                <td className="py-2 px-3">
                                    {changeTimeFormat(value.totalWorkingTime)}
                                </td>
                                <td className="py-2 px-3">
                                    {changeTimeFormat(value.noonRestTime)}
                                </td>
                                <td className="py-2 px-3">
                                    {changeTimeFormat(value.nightRestTime)}
                                </td>
                                <td className="py-2 px-3">
                                    {changeTimeFormat(value.totalWorkingTime - value.noonRestTime - value.nightRestTime)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Records