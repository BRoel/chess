import React, { MouseEvent, useRef } from 'react';
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
    const chessboardRef = useRef<HTMLDivElement>(null);

    const board = []

    let activePiece: HTMLElement | null = null;

    function grabPiece(e: React.MouseEvent) {
        const element = e.target as HTMLElement;
        if (element.classList.contains('chess-piece')) {
            const x = e.clientX -159; //what is clientX & Y??
            const y = e.clientY -210;
            element.style.position = 'absolute';
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;
    
            activePiece = element;
        }
    }
    
    function movePiece(e: React.MouseEvent) {
        const chessboard = chessboardRef.current;
        if(activePiece && chessboard) {
            const minX = chessboard.offsetLeft - 140;
            const maxX = chessboard.offsetLeft + chessboard.clientWidth - 180;
            const minY = chessboard.offsetTop - 185;
            const maxY = chessboard.offsetTop + chessboard.clientHeight - 240;
            const x = e.clientX - 159; //what is clientX & Y??
            const y = e.clientY - 210;
            activePiece.style.position = 'absolute';

            if (x < minX) {
                activePiece.style.left = `${minX}px`;
            } else if (x > maxX) {
                activePiece.style.left = `${maxX}px`;
            } else {
                activePiece.style.left = `${x}px`;
            }

            if (y < minY) {
                activePiece.style.top = `${minY}px`;
            } else if (y > maxY) {
                activePiece.style.top = `${maxY}px`;
            } else {
                activePiece.style.top = `${y}px`;
            }
        }
    }
    
    function dropPiece(e: React.MouseEvent) {
        if (activePiece) {
            activePiece = null
        }
    }


    for (let i = verticalAxis.length-1; i >= 0; i--) {
        for (let j = 0; j < horizontalAxis.length; j++) {
            const number = i+j+2
            let image = undefined;

            pieces.forEach((p) => {
                if (p.y === i && p.x === j) {
                    image = p.image;
                }
            });

            board.push(<Tile key={`${i},${j}`} image={image} number={number} />)
        }
    }
    
    return <div onMouseUp={e => dropPiece(e)} onMouseMove={e => movePiece(e)} onMouseDown={e => grabPiece(e)} id='chessboard' ref={chessboardRef}>{board}</div>
}