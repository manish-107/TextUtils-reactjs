
import React, { useState } from 'react'


export default function Home(props) {



  const buttonClick = () => {
    // console.log('clicked')
    if (text === "") {
      props.showAlert("Enter the text", "danger")
    } else {
      let newText = text.toUpperCase()
      setText(newText)
      props.showAlert("Converted to uppercase", "success");
    }

  }

  const clearText = () => {
    if (text === "") {
      props.showAlert("Enter the text", "danger");
    } else {
      setText("")
      props.showAlert("Text has been cleared", "primary");
    }

  }

  const extraSpace = () => {
    let extraText = text.trim().replace(/\s+/g, ' ');
    setText(extraText);
  }

  const copyText = () => {
    if (text === "") {
      props.showAlert("Enter the text", "danger");
    } else {
      let text1 = document.getElementById('exampleFormControlTextarea1');
      text1.select();

      try {
        // Attempt to use the clipboard API for modern browsers
        navigator.clipboard.writeText(text1.value)
          .then(() => {
            props.showAlert("Copied to clipboard", "success");
          })
          .catch((error) => {
            console.error('Clipboard writeText failed:', error);

            // Fallback for mobile devices and older browsers
            if (document.execCommand) {
              const textarea = document.createElement('textarea');
              textarea.value = text1.value;
              document.body.appendChild(textarea);
              textarea.select();
              document.execCommand('copy');
              document.body.removeChild(textarea);

              props.showAlert("Copied to clipboard", "success");
            } else {
              props.showAlert("Copy to clipboard not supported", "danger");
            }
          });
      } catch (error) {
        console.error('Clipboard API not supported:', error);

        // Fallback for mobile devices and older browsers
        if (document.execCommand) {
          const textarea = document.createElement('textarea');
          textarea.value = text1.value;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);

          props.showAlert("Copied to clipboard", "success");
        } else {
          props.showAlert("Copy to clipboard not supported", "danger");
        }
      }
    }
  }


  const textChanged = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState('');


  return (
    <div >
      <div className="container " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <div className="mb-3">
          <p className="fs-4  mt-3 py-0 my-0 " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Enter the text here</p>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.value}</label>
          <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#0b1a25' : '#b2c5f4', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} id="exampleFormControlTextarea1" onChange={textChanged} rows="10"></textarea>
        </div>
        <div className='container-sm'>
          <button className='mx-2 btn btn-primary my-2' onClick={buttonClick}>uppercase</button>
          <button className='mx-2 btn btn-primary my-2' onClick={clearText}>Clear</button>
          <button className='mx-2 btn btn-primary my-2' onClick={copyText}>Copy</button>
          <button className='mx-2 btn btn-primary my-2' onClick={extraSpace}>Remove extra space</button>
        </div>



        <p className='my-3'>
          Words : {text.split(/\s+/).filter(Boolean).length}
          {/* filter(Boolean) method to remove any empty strings from the array, as consecutive spaces might create empty strings. */}

          <span> Characters : {text.replace(/[\n ]/g, '').length}</span>

        </p>
        <div className="card my-4" >
          <div className="card-body" style={{ backgroundColor: props.mode === 'dark' ? '#0b1a25' : '#b2c5f4', color: props.mode === 'dark' ? 'white' : 'black' }}>
            Preview
            <div className=" card-body" >
              <h6 className='card-title'>{text.length > 0 ? text : "Enter the text to preview"}</h6>
            </div>
          </div>

        </div>
      </div>
    </div >

  )
}

