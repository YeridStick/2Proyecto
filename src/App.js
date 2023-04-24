import './App.css';
import Contacto from './components/ComponenteA';
import ComponenteB from './components/ComponenteB';

function App() {
  const contacto = new Contacto('Juan', 'Pérez', 'juan.perez@example.com', true);
  return (
    <div className="App">
      <ComponenteB contacto={contacto} />
      
    </div>
  );
}

export default App;
