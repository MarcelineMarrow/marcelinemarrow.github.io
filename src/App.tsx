import React, {useState} from "react";
import './styles.css';
import Nav from "./Nav";
import Home from "./Home";

const App = () => {
    const [content, setContent] = useState(Home());

    return(
        <div style={{padding: 20}}>
            <Nav contentDispatch={setContent} />
            <div>
                {content}
            </div>
        </div>
    )
}

export default App