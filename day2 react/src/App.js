import './App.css';
import Footre from './footer';
import Login from './login';
import Register from './register';

function App() {
  return (
    <div className="App">
      <div class="container">
        <Login/>
        <Register/>
      </div>
      
      <Footre></Footre>
    </div>
  );
}

export default App;
