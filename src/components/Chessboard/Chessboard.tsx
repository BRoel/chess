import Tile from '../Tile/Tile';
import './Chessboard.css';

const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8']

interface Piece {
    image: string;
    x: number;
    y: number;
}

const pieces: Piece[] = [];

for (let i = 0; i < 8; i++) {
    pieces.push({ image: 'images/pawn_b.png', x: i, y: 6 });
}

for (let i = 0; i < 8; i++) {
    pieces.push({ image: 'images/pawn_w.png', x: i, y: 1 });
}

for (let p = 0; p < 2; p++) {
    const type = p === 0 ? 'b' : 'w';
    const y = p === 0 ? 7 : 0;

    pieces.push({ image: `images/rook_${type}.png`, x: 0, y });
    pieces.push({ image: `images/rook_${type}.png`, x: 7, y });

    pieces.push({ image: `images/knight_${type}.png`, x: 1, y });
    pieces.push({ image: `images/knight_${type}.png`, x: 6, y });

    pieces.push({ image: `images/bishop_${type}.png`, x: 2, y });
    pieces.push({ image: `images/bishop_${type}.png`, x: 5, y });

    pieces.push({ image: `images/queen_${type}.png`, x: 3, y });

    pieces.push({ image: `images/king_${type}.png`, x: 4, y });

}

export default function Chessboard() {
    


    const board = []

    for (let i = verticalAxis.length-1; i >= 0; i--) {
        for (let j = 0; j < horizontalAxis.length; j++) {
            const number = i+j+2
            let image = undefined;

            pieces.forEach((p) => {
                if (p.y === i && p.x === j) {
                    image = p.image;
                }
            });

            board.push(<Tile image={image} number={number} />)
        }
    }
    
    return <div id='chessboard'>{board}</div>
}