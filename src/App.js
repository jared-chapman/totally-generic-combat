import './App.css';
import Main from "./Components/Main"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <header className="App-header"></header>
        <div className="Transition"></div>
        <Main/>
      </DndProvider>
    </div>
  );
}

export default App;
