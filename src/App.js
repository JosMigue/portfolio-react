import './App.css';
import Main from './components/Main'
import Menu from './components/layout/Menu'

function App() {
  return (
    <div className="w-3/4 m-auto">
      <Menu/>
      <section>
        <Main/>
      </section>
    </div>
  );
}

export default App;
