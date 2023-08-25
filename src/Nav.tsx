import React from "react";
import Button from "./Button";
import Home from "./Home";
import TestPage from "./TestPage";

interface NavProps {
    contentDispatch: React.Dispatch<React.SetStateAction<React.JSX.Element>>;
}

const Nav = (props: NavProps) => {
    return(
        <div style={{ paddingBottom: 10 }}>
            <Button text={"Home"} onClick={() => props.contentDispatch(Home())} />
            <Button text={"Test Page"} onClick={() => props.contentDispatch(TestPage())} />
        </div>
    )
};

export default Nav;