import logo from './logo.svg';
import './App.css';
import ClientJS from 'clientjs';
import useDeviceFingerprint from './test';


function App() {
  const deviceFingerprint = useDeviceFingerprint('d');

  return (
    <div className="App">
      <header className="App-header">
       
        <p>Device Id:  {deviceFingerprint}</p>
        
      </header>
    </div>
  );
}

export default App;
