import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='text-success fw-bold mb-4'>Below are the answers to the questions:</h2>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><b>Tell us the differences between uncontrolled and controlled components.</b></Accordion.Header>
                    <Accordion.Body>
                    In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. They use a ref to access the DOM element's current value and update the state accordingly. <br />
                    In other words, controlled components have their state managed by React, while uncontrolled components manage their own state in the DOM. Controlled components provide more control and reliability, while uncontrolled components can be faster and more convenient for simple use cases.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><b>How to validate React props using PropTypes</b></Accordion.Header>
                    <Accordion.Body>
                    To validate React props using PropTypes, you can import the PropTypes library and define the expected data types for each prop in your component. This helps catch errors and ensure that your component receives the correct data types for its props. You can define PropTypes using a static propTypes object within your component class or function, and specify the data type and whether the prop is required or not.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><b>Tell us the difference between nodejs and express js.</b></Accordion.Header>
                    <Accordion.Body>
                    Node.js is a runtime environment that executes JavaScript code outside of a web browser, whereas Express.js is a web framework built on top of Node.js that provides a set of features and tools to build web applications, such as routing, middleware, and templating. In other words, Node.js is the underlying platform that enables server-side JavaScript execution, while Express.js is a higher-level abstraction that simplifies the process of building web applications with Node.js.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><b>What is a custom hook, and why will you create a custom hook?</b> </Accordion.Header>
                    <Accordion.Body>
                    Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code. <br />
                    Developers create custom hooks to simplify their codebase and make their components more modular and reusable. By encapsulating and abstracting away logic into a custom hook, developers can make their components more focused on presentation and reduce the risk of errors or bugs. Custom hooks also allow developers to share common functionality across multiple components, making it easier to maintain and update their codebase.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;