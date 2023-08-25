import React from "react";
import Button from "./Button";
import Home from "./Home";
import TestPage from "./TestPage";

interface NavProps {
    contentDispatch: React.Dispatch<React.SetStateAction<React.JSX.Element>>;
}

const Nav = (props: NavProps) => {
    return(
        <div style={{ paddingBottom: 10, borderBottom: "solid" }}>
            <ul style={{ listStyleType: "none", display: "inline", padding: 0 }}>
                <li style={{ display: "inline" }}><Button text={"Home"} onClick={() => props.contentDispatch(Home())} /></li>
                <li style={{ display: "inline" }}><Button text={"Test Page"} onClick={() => props.contentDispatch(TestPage())} /></li>
            </ul>
        </div>
    )
};

export default Nav;