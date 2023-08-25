import React, {useEffect} from "react";

interface ContentProps {
    content: React.JSX.Element;
}

const Content = (props: ContentProps) => {
    useEffect(() => {

    }, [props.content])

    return props.content;
};

export default Content;