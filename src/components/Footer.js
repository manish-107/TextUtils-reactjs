import React from 'react'

export default function Footer(props) {
    return (
        <div>
            <footer className={`footer py-3 bg-${props.mode} `}>
                <div className={`container text-center text-${props.mode === 'light' ? 'dark' : 'light'}`} >
                    <span className="">Simple react website.</span>
                </div>
            </footer>
        </div>
    )
}
