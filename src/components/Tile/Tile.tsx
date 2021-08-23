import './Tile.css';

interface Props {  // learn interface Props
    number: number;
}

export default function Tile({ number }: Props) {
    if (number % 2 === 0) {
        return <div className='tile tile-black'></div>;
    } else {
        return <div className='tile tile-white'></div>;
    }
}