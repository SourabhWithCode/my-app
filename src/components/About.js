import React  from 'react'

export default function About(props) {


    console.log(props.text)

    return (
        <>
            <div id='containerz' className={`containerz bg-${props.mode} `}>
                <h1 id='aboutUs' className={`text-center my-4 text-${props.text}`}>ABOUT US</h1>
                <div className="accordion " id="accordionExample">
                    <div className="accordion-item " >
                        <h2 className="accordion-header" id="headingOne">
                            <button className={`accordion-button bg-${props.mode} text-${props.text}`} type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                               <strong> Analyze To Text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className={`accordion-body bg-${props.mode}`}>
                                <strong>
                                    TextUtils Gives you a way to analyze your text quickly and efficientlly. Be it word count, character count or
                                </strong>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" >
                        <h2 className="accordion-header" id="headingTwo">
                            <button className={`accordion-button bg-${props.mode} text-${props.text}`} type="button"  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Free To Use</strong>
                                
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className={`accordion-body bg-${props.mode}`}>
                                <strong>
                                    TextUtils Is a free character count tool that provide instant character count and word count statictics for a give text . TextUtils reports the number of word and character . The it is sutable for writing words / character items
                                </strong>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" >
                        <h2 className="accordion-header" id="headingThree">
                            <button className={`accordion-button bg-${props.mode} text-${props.text}`}type="button"  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Browser Compatblite</strong>
                                
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className={`accordion-body bg-${props.mode}`} >
                                <strong>
                                    This Word count Software only work in web browser suit to cpunt character in facebook , bolg, books ,excel, document,pdf document,essays , etc...
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};