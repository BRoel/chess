import './App.css';
import Chessboard from './components/Chessboard/Chessboard';

function App() {
  return (
    <div className='app'>
      <img id='background' src='images/wood.png' />
      <Chessboard/>
    </div>
  );
}

export default App;
