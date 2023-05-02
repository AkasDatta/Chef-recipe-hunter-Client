import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blogs = () => {
    return (
        <div className='container'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><b>Tell us the differences between uncontrolled and controlled components.</b></Accordion.Header>
                    <Accordion.Body>
                    
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><b>How to validate React props using PropTypes</b></Accordion.Header>
                    <Accordion.Body>
                   
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><b>Tell us the difference between nodejs and express js.</b></Accordion.Header>
                    <Accordion.Body>
                    useRef is a React hook that returns a mutable ref object. It can be used to access and modify DOM nodes or to store mutable values that do not trigger a re-render when they change. The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. <br />
                    Syntax: <br />
                    <b>const refContainer = useRef(initialValue);</b>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><b>What is a custom hook, and why will you create a custom hook?</b> </Accordion.Header>
                    <Accordion.Body>
                    useMemo() is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations. Simply put, useMemo is a React hook that allows you to memoize a function's result to optimize the performance of your application. It takes a function and an array of dependencies, and only re-computes the memorized value when one of the dependencies has changed.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;