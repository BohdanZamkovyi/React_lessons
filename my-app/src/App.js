import './App.css';
import UserContainer from "./components/UserContainer/UserContainer";
import {createContext} from "react";
export const SomeContext = createContext(null);
function App() {
  return (
    <div className="App">
      <SomeContext.Provider value='hello'>
        <UserContainer/>
      </SomeContext.Provider>
    </div>
  );
}

export default App;
