function GameState({setGameState, count, setCount, clicked, setClicked}) {

    const handleStart = () => {
        setGameState(true);
        setCount(0);
        setClicked([]);
    }
    const showFail = () => {
        if(count != 0) {
            return(
                <div>
                    You scored {count}!
                    <br></br>
                    {clicked.slice(-1)[0]} was a duplicate!
                </div>
            )
        }
    }
    return(
        <div className="game-menu">
            {showFail()}
            <button
                onClick={handleStart}
            >
                Start
            </button>
            
        </div>
    )
}
export default GameState;