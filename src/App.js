import './App.css';
import { useState } from 'react';
import { Card } from './components/Cards';
import { useFetch } from './customHooks/fetchAPI';
import { Skeleton } from './components/Skeleton';

function App() {
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/users');
  const { data, loading, error } = useFetch(url);

  return (
    <div
      className="min-vh-100 d-flex justify-content-center"
      style={{ backgroundColor: '#e2e8f0' }}
    >
      <div className="container d-flex flex-column align-items-center justify-content-center gap-4 mt-4">
        <header className="text-center">
          <h3>Consumo de una API</h3>
          <p className="text-secondary" style={{ maxWidth: 700 }}>
            API significa “interfaz de programación de aplicaciones”. En el
            contexto de las API, la palabra aplicación se refiere a cualquier
            software con una función distinta.
          </p>
        </header>
        <section className="w-100 d-flex flex-wrap justify-content-center gap-3">
          {loading && [...Array(6)].map((e, i) => <Skeleton key={i} />)}
          {error && <div>{error}</div>}
          {data &&
            data.map((user) => (
              <Card
                index={user.id}
                key={user.id}
                name={user.name}
                email={user.email}
                street={user.address.street}
                city={user.address.city}
                zipcode={user.address.zipcode}
              />
            ))}
        </section>
      </div>
    </div>
  );
}

export default App;
