import './Tile.css';

interface Props {  // learn interface Props
    image?: string;
    number: number;
}

export default function Tile({ number, image }: Props) {
    if (number % 2 === 0) {
        return (
            <div className='tile tile-black'>
                <img src={image} />
            </div>
        );
    } else {
        return (
            <div className='tile tile-white'>
                {' '}
                <img src={image} />
            </div>
        );
    }
}