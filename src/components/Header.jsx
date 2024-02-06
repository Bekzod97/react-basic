import logo from "/logo-name.svg"
import { useState } from "react";

export default function Header() {

    const [date, setDate] = useState(new Date())

    setInterval(() => setDate(new Date()), 1000)


    return (
        <header>
            <img src={logo} alt="Result University" />
            <span>тут будет время: {date.toLocaleTimeString()} </span>
        </header>
    )
}