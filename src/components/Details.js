import React from 'react'

function Details(props) {
    return (
        <div className='container py-5' ><div className="accordion accordion-flush" id="accordionFlushExample" >
            <div className="card my-5" style={{ backgroundColor: props.mode === 'dark' ? '#0b3d62' : '#b2c5f4', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="card-body">
                    The first React website I created was a simple analysis tool. Leveraging React's component architecture, I designed a user-friendly interface for inputting and analyzing textual data. Utilizing useState and useEffect hooks, I managed the data and performed real-time analysis, such as word count or sentiment analysis. This project showcased React's power in building dynamic, data-driven web applications and marked the beginning of my journey into web development.
                </div>
            </div>
            <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? '#0b3d62' : '#b2c5f4', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 className="accordion-header" >
                    <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'dark' ? '#0b3d62' : '#b2c5f4', color: props.mode === 'dark' ? 'white' : 'black' }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        HTML , CSS , JavaScript
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        HTML, CSS, and JavaScript form the core technologies for web development. HTML (Hypertext Markup Language) structures web content, defining elements and their layout. CSS (Cascading Style Sheets) styles HTML elements, controlling design and presentation. JavaScript is a dynamic scripting language, adding interactivity and functionality to web pages. Together, they enable the creation of engaging, responsive, and interactive websites, making them the foundation of modern web development.</div>
                </div>
            </div>
            <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? '#0b1a25' : '#b2c5f4', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'dark' ? '#0b1a25' : '#b2c5f4', color: props.mode === 'dark' ? 'white' : 'black' }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Bootstrap
                    </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Bootstrap is a popular front-end framework for web development. Developed by Twitter, it offers a set of pre-designed CSS and JavaScript components that streamline the creation of responsive, mobile-first websites. Bootstrap provides a grid system, typography, navigation elements, and various UI components, simplifying the design process and ensuring a consistent look and feel across different devices and browsers. It's a valuable tool for developers aiming to build attractive and functional web applications quickly.</div>
                </div>
            </div>
            <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? '#0b3d62' : '#b2c5f4', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'dark' ? '#0b3d62' : '#b2c5f4', color: props.mode === 'dark' ? 'white' : 'black' }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        React
                    </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">In React, props and useState are fundamental concepts. Props allow data to flow from parent to child components, facilitating component reusability. useState is a hook that enables components to manage and update their internal state, triggering re-rendering when state values change. These mechanisms are vital for building dynamic, interactive React applications.</div>
                </div>
            </div>
        </div></div>
    )
}

export default Details