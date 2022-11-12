import { ChangeEventHandler } from "react";

interface ResultProps {
    noonRestTime: number,
    nightRestTime: number,
    totalWorkingTime: number,
}

interface ActionProps {
    setAction?: ChangeEventHandler<HTMLInputElement>,
}

interface DateTimeProps {
    date: string,
    morningStart: string,
    morningEnd: string,
    noonStart: string,
    noonEnd: string,
    nightStart: string,
    nightEnd: string,
}

interface TimeInputProps extends ActionProps, DateTimeProps { }




export type { ResultProps, TimeInputProps, DateTimeProps }