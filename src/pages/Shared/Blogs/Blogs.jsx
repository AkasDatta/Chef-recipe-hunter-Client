import React from 'react';
import { Button } from 'react-bootstrap';
import { FaArrowDown } from 'react-icons/fa';
import Pdf from "react-to-pdf";


const ref = React.createRef();

const Blogs = () => {
    const options = {
        orientation: "landscape",
        unit: "px",
        formal: [400, 720],
    };

    return (
        <div className='container mt-5 mb-5 pt-5 pb-5'>
            <div className='text-center ml-5'>
                <Pdf targetRef={ref} options={options} filename="Blog_Questions_part1.pdf">
                {({ toPdf }) => (
                    <Button onClick={toPdf} className="btn-danger m-5">
                    Download Part 1 <FaArrowDown className="mx-1" />
                    </Button>
                )}
                </Pdf>
            </div>
           <div >
         
                <div ref={ref} className='container'>
                    <div className='container m-3'>
                    <h2 className='text-success fw-bold mb-4'><b>Below are the answers to the questions:</b></h2> <br />
                    <h3>Tell us the differences between uncontrolled and controlled components.</h3>
                    <p>
                        In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. They use a ref to access the DOM element's current value and update the state accordingly. <br />
                        In other words, controlled components have their state managed by React, while uncontrolled components manage their own state in the DOM. Controlled components provide more control and reliability, while uncontrolled components can be faster and more convenient for simple use cases.
                    </p>
                    <h3>How to validate React props using PropTypes?</h3>
                    <p>
                        To validate React props using PropTypes, you can import the PropTypes library and define the expected data types for each prop in your component. This helps catch errors and ensure that your component receives the correct data types for its props. You can define PropTypes using a static propTypes object within your component class or function, and specify the data type and whether the prop is required or not.
                    </p>
                    <h3>Tell us the difference between nodejs and express js.</h3>
                    <p>
                        Node.js is a runtime environment that executes JavaScript code outside of a web browser, whereas Express.js is a web framework built on top of Node.js that provides a set of features and tools to build web applications, such as routing, middleware, and templating. In other words, Node.js is the underlying platform that enables server-side JavaScript execution, while Express.js is a higher-level abstraction that simplifies the process of building web applications with Node.js.
                    </p>

                    <h3>What is a custom hook, and why will you create a custom hook?</h3>
                    <p>  
                        Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code. <br />
                        Developers create custom hooks to simplify their codebase and make their components more modular and reusable. By encapsulating and abstracting away logic into a custom hook, developers can make their components more focused on presentation and reduce the risk of errors or bugs. Custom hooks also allow developers to share common functionality across multiple components, making it easier to maintain and update their codebase.
                    </p>
                
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Blogs;