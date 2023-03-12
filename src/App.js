import './App.css';
import Main from "./Components/Main"
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faHouse, faBackward } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faCoffee, faHouse, faBackward)


function App() {
  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
