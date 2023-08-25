import React, {useEffect, useState} from "react";
import Nav from "./Nav";
import Home from "./Home";
import Content from "./Content";

const App = () => {
    const [content, setContent] = useState(Home());

    return(
        <div style={{padding: 20}}>
            <Nav contentDispatch={setContent} />
            <div>
                <Content content={content} />
            </div>
        </div>
    )
}

export default App