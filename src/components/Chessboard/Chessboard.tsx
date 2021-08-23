import Tile from '../Tile/Tile';
import './Chessboard.css';

export default function Chessboard() {
    
    const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8']

    const board = []

    for (let i = verticalAxis.length-1; i >= 0; i--) {
        for (let j = 0; j < horizontalAxis.length; j++) {
            const number = i+j+2

            board.push(<Tile number={number}/>)

        }
    }
    
    return (
        <div id='chessboard'>
            {board}
        </div>
    )
}