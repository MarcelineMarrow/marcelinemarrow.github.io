import React, {MouseEventHandler} from "react"

interface ButtonProps {
    text: string;
    onClick: MouseEventHandler;
}

const Button = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick} className={"button"} >{props.text}</button>
    )
};

export default Button;