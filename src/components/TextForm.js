import React, { useState } from "react";
export default function TextForm(props) {
    const [text, setText] = useState("Enter Text Here ");
    const [spellC, setspellC] = useState("false");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleOnChange = (event) => {
        setText(event.target.value)
    };

    const handleClearClick = (event) => {
        let newText = '';
        setText(newText);
    };
    const handleCopy = () => {
        // const box = document.getElementById("myBox");
        // box.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copy To Clipbord Success Full","success");
    };
    const handleSpell = () => {
        setspellC("true")

    };

    return (
        <>
            <div className="mb-3 container d-flex justify-content-center align-items-center flex-wrap ">
            <h1 className="text-center my-3">{props.heading}</h1>
                <textarea
                    spellCheck={spellC}
                    className={`form-control bg-${props.mode}`} 
                    value={text}
                    id="myBox"
                    onChange={handleOnChange}
                    rows="12"
                ></textarea>
                <button className="btn btn-primary my-4 mx-4 fw-bold" onClick={handleUpClick}>Convert To Uperr Case</button>
                <button className="btn btn-success my-4 mx-4 fw-bold" onClick={handleLowClick}>Convert To Lowwer Case</button>
                <button className="btn btn-info my-4 mx-4 fw-bold text-light" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-danger my-4 mx-4 fw-bold text-light" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-dark my-4 mx-4 fw-bold text-light" onClick={handleSpell}>Spell Check</button>
            </div>
            <div className="container my-2">
                <h1>Your Text Summery</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Words ,{text.length} Character</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes Read</p>
                <h3>Preview</h3>
                <p className="text-success sami-bold">{text.length>0?text:"Enter SomeThing in The Text Box Here"}</p>
            </div>
        </>
    );
}
