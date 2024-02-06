import "./Button.css";

export default function BUtton({ children, clickButton, isActive }) {

    return (
        <button className={isActive ? "button active" : "button"}
            onClick={clickButton}>
            
            {children}</button>
    )
}