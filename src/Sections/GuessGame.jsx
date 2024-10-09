import "../Styles/Sections/guessGame.css";


function GuessGame() {
    const click = () => {
        console.log("button clicked");
    }

    return (
        <section id="guess-game" className="guess-game">
            <div className="gg-headings">
                <h2>Guessing Game</h2>
                <h3>Try to guess a number between 1 and 100</h3>
                <h3 id="gg-feedback">AAA</h3> 
            </div>
            <div className="gg-form-container">
                <form className="gg-form">
                    <input id="gg-input" placeholder="&#35;" autoFocus autoComplete="off" />
                    <button id="gg-btn-submit" onClick={click}>Submit</button>
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