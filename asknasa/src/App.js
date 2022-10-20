import {useState} from 'react'
import './App.css';
import NasaContext from "./context.js";
import DayPickerComponent from "./components/dayPickerComponent.js";

function App() {
  const [date, setDate] = useState(new Date().toString());

  return (
    <div className="App">
      <NasaContext.Provider value={{date, setDate}}>
        <div className={'asknasa-container'}>
          <div className={'input-field-container'}>
            <p>
              Nasa took a picture of our universe each day! Select a date, and check out that day's picture!
            </p>
            <DayPickerComponent />
          </div>
        </div>
      </NasaContext.Provider>
    </div>
  );
}

export default App;
