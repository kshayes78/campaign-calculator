import '../App.css';
import CalculateIcon from '@mui/icons-material/Calculate';
import TurnoutCalc from './TurnoutCalc';

function App() {
  return (
    <div className='App'>
      <CalculateIcon className="calculator" />
      <h1>Campaign Calculators</h1>
      <TurnoutCalc />
    </div>
  );
}

export default App;
