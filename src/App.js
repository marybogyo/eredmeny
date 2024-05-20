import logo from './logo.svg';
import './App.css';
import Kategoria from './components/Kategoria';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <h1>Tesztkérdések</h1>
      </header>
      <div>
        <main>
          <article>
            <div>
              <Kategoria/>
            </div>
            <div>
            <Main/>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}

export default App;
