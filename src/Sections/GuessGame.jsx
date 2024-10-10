import { useState, useRef } from "react";
import "../Styles/Sections/guessGame.css";


function GuessGame() {
    const [inputValue, setInputValue] = useState("");
    const feedbackRef = useRef(null);
    // const guessCount = useRef(0);

    const regex = /^(100|[1-9]?[0-9])$/;
    const clrWarning = "#e68ab8";
    const clrSuccess = "#0f5e42";

    let guessCount = 0;

    const handleOnChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (regex.test(inputValue)) {
            guessCount = guessCount + 1;
            console.log(guessCount);
            setInputValue("");
        } else {
            setInputValue("");
            giveFeedback("Not a valid Number", clrWarning);            
        }       
    }

    const giveFeedback = (str, clr, time = 3000) => {
        feedbackRef.current.textContent = str;
        feedbackRef.current.style.color = clr;
        feedbackRef.current.style.opacity = 1;
        setTimeout( () => {
            feedbackRef.current.style.opacity = 0;
        }, time);
    }

    return (
        <section id="guess-game" className="guess-game">
            <div className="gg-headings">
                <h2>Guessing Game</h2>
                <h3>Try to guess a number between 1 and 100</h3>
                <h3 id="gg-feedback" ref={feedbackRef}>AAA</h3> 
            </div>
            <div className="gg-form-container">
                <form className="gg-form" onSubmit={handleSubmit}>
                    <input type="text" id="gg-input" placeholder="&#35;" autoComplete="off" value={inputValue} onChange={handleOnChange}/>
                    <button type="submit" id="gg-btn-submit">Submit</button>
                </form>                
            </div>         
            <div className="gg-try-container">
                <div className="gg-tries-left">                    
                </div>
                <div className="gg-guess-list">
                </div>
            </div>
        </section>
    )
}

export default GuessGame;