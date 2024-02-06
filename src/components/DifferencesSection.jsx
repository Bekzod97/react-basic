import { useState } from "react";
import Button from "./Button/Button"
import { differences } from "../data";

export default function DifferencesSection() {

    const [contentType, setContentType] = useState(null)

    function handleClick(type) {
        setContentType(type)

    }

    return (
        <section>
            <Button isActive={
                contentType == "way"
            } clickButton={() => handleClick("way")}>Подход</Button>
            <Button isActive={
                contentType == "easy"
            } clickButton={() => handleClick("easy")}>Доступность</Button>
            <Button isActive={
                contentType == "program"
            } clickButton={() => handleClick("program")}>Концентрация</Button>

            {contentType != null && <p>{differences[contentType]}</p>}
            {contentType == null && <p>Нажми на кнопку</p>}
        </section>
    )
}