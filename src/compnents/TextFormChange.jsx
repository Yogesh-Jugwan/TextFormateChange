import React, { useState } from 'react'

export default function TextFormChange(props) {
    const hendleUpChange = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const hendleLowChange = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const hendleCpChange = () => {
        if (text==="") {
            return "";
        }
        let newText =text[0].toUpperCase()+text.toLowerCase().slice(1);
        setText(newText);
    }
    const copyText = () =>{
        let newText = document.getElementById("myText");
        navigator.clipboard.writeText(newText.value);
    }
    const hendleClear = () => {
        let newText = '';
        setText(newText);
    }
    const hendleOnchang = (event) => {
        setText(event.target.value);
    }
    
    const [text, setText] = useState('');
    return (
        <>

            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.title}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{background:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} onChange={hendleOnchang} name="textarea" id="myText" cols="30" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={hendleUpChange}>Convert_UperCase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={hendleLowChange}>LowerCase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={hendleCpChange}>Capitalize</button>
                <button className="btn btn-primary mx-2 my-2" onClick={hendleClear}>Clear</button>
                <button className="btn btn-primary mx-2 my-2" onClick={copyText}>Text Copy</button>
            </div>
            <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
                <p>Word Langth {text.split(" ").filter((element)=>{return element.length!==0}).length} and Characters Langth {text.length}</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Word read Time and Characters read Time {0.008 * text.length}</p>
                {/* <p>{text.split(" , ").text.charAt(0).toUpperCase().slice(1)}</p> */}
                <h2>Preview</h2>
                <p>{text}</p>
            </div   >
        </>
    )
}
