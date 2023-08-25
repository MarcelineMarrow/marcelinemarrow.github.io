import React, {MouseEventHandler} from "react"

interface ButtonProps {
    text: string;
    onClick: MouseEventHandler;
}

const Button = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick}>{props.text}</button>
    )
};

export default Button;