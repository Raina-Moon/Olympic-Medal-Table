import "./App.css";
import MedalList from "./MedalList";
import MedalForm from "./MedalForm";
import { useState } from "react";

function App() {
  const [countries, setCountry] = useState([]);
  const addCountry = (newCountry) => {
    setCountry((countries) => {
      const updatedCountries = [...countries, newCountry];
      return updatedCountries.sort((a, b) => b.gold - a.gold);
    });
  };
  const modifyCountry = (modifiedCountry) => {
    setCountry((countries) => {
      const updatedCountries =
      countries.map((country) =>
        country.name === modifiedCountry.name
          ? { ...country, ...modifiedCountry }
          : country
      )
    ;

    return updatedCountries.sort((a, b) => b.gold - a.gold)
  });
}
  const deleteCountry = (countryName) => {
    setCountry(countries.filter((country) => countryName !== country.name));
  };

  return (
    <div className="card">
      <MedalForm addCountry={addCountry} modifyCountry={modifyCountry} countries={countries}/>
      {/*list of added countries*/}
      <MedalList countries={countries} deleteCountry={deleteCountry} />
    </div>
  );
}

export default App;
