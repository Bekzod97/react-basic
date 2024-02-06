import WhyToTeach from "./WhyToTeach";
import { ways } from "../data.js";


export default function TeachingSection() {

    const wayComponents = ways.map(way => (
        <WhyToTeach
            key={way.description} title={way.title} description={way.description} />
    ))
    return (
        <section>
            <h3>Наш подход к обучению</h3>

            <ul>
                {wayComponents}
            </ul>
        </section>
    )
}