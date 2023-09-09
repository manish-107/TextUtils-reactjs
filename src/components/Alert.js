import React from 'react'

function Alert(props) {
    //to convert first word to capital of type
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        //props.alert && if props.alert is null it will not return
        <div style={{ height: '50px' }}>

            {props.alert && <div>
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{capitalize(props.alert.type)} </strong> {props.alert.msg}

                </div>
            </div>}
        </div>
    )
}

export default Alert

