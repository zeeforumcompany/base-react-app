import Heading from './Heading';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

console.log('App File!');

function App() {
  console.log('App Component Called!');

  const [backgroundClass, setBackgroundClass] = useState('App-header');

  const changeBackground = () => {
    console.log("🚀 ~ file: App.js:10 ~ changeBackground ~ changeBackground:")
    if (backgroundClass === 'App-header') {
      setBackgroundClass('App-body');
      return;
    }

    setBackgroundClass('App-header');
  }

  useEffect(() => {
    console.log("backgroundClass Changed!")
  }, [backgroundClass]);

  useEffect(() => {
    console.log("Common useEffect Hook Called with Empty Dependency!");
  }, []);

  useEffect(() => {
    console.log("Common useEffect Hook Called with No Dependency!");
  });

  return (
    <div className="App">
      { backgroundClass === 'App-header' ? <Heading /> : '' }
      <header className={ backgroundClass }>
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={changeBackground}>Change Background</button>
      </header>
    </div>
  );
}

export default App;
