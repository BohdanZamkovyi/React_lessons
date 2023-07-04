import logo from './logo.svg';
import './App.css';
import Сharacter from "./components/Character/Character";

function App() {
  return (
    <div className="App">
      <Сharacter
          name={'Bubonic Plague'}
          id={100}
          status={'Dead'}
          species={'Disease'}
          gender={'unknown'}
          image={'https://rickandmortyapi.com/api/character/avatar/100.jpeg'}
      />
        <Сharacter
            name={'Frankenstein\'s Monster'}
            id={128}
            status={'Dead'}
            species={'Alien'}
            gender={'Male'}
            image={'https://rickandmortyapi.com/api/character/avatar/128.jpeg'}
        />
        <Сharacter
            name={'Miles Knightly'}
            id={544}
            status={'Dead'}
            species={'Alien'}
            gender={'Male'}
            image={'https://rickandmortyapi.com/api/character/avatar/544.jpeg'}
        />
        <Сharacter
            name={'Hephaestus'}
            id={556}
            status={'Alive'}
            species={'Mythological Creature'}
            gender={'Male'}
            image={'https://rickandmortyapi.com/api/character/avatar/556.jpeg'}
        />
        <Сharacter
            name={'Japheth\'s Middle Son'}
            id={676}
            status={'Dead'}
            species={'Humanoid'}
            gender={'Mail'}
            image={'https://rickandmortyapi.com/api/character/avatar/676.jpeg'}
        />
        <Сharacter
            name={'Princess Ponietta'}
            id={730}
            status={'Alive'}
            species={'Animal'}
            gender={'Female'}
            image={'https://rickandmortyapi.com/api/character/avatar/730.jpeg'}
        />

    </div>
  );
}

export default App;
