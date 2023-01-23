import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Platform from './component/Platform';
import './scss/platform.scss';
import { CreatingProvider } from './context/EditorContext';

function App() {
  return (
    <div className="App">
      <CreatingProvider>
        <Platform/>
      </CreatingProvider>
    </div>
  );
}

export default App;
