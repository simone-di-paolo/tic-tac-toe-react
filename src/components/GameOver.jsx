export default function GameOver({ winner }) {
    return (
        <div id="game-over">
            <h2>Game over!</h2>
            <p>{winner} won!</p>
            <p>
                <button>Rematch!</button>
            </p>
        </div>
    )
}