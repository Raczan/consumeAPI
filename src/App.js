import logo from './logo.svg';
import './App.css';
import { Card } from './components/Cards';

function App() {
  return (
    <div
      className="vh-100 vw-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: '#f0f9ff' }}
    >
      <div className="container d-flex flex-column align-items-center gap-4">
        <header className="text-center">
          <h3>Consumo de una API</h3>
          <p className="text-secondary" style={{ maxWidth: 700 }}>
            API significa “interfaz de programación de aplicaciones”. En el
            contexto de las API, la palabra aplicación se refiere a cualquier
            software con una función distinta.
          </p>
        </header>
        <section>
          <Card />
        </section>
      </div>
    </div>
  );
}

export default App;
