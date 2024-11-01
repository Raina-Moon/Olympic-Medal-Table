import { useState } from "react";

const MedalForm = ({ countries,addCountry, modifyCountry }) => {
  const [name, setName] = useState("");
  const [bronze, setBronze] = useState(0);
  const [silver, setSilver] = useState(0);
  const [gold, setGold] = useState(0);

  const onSubmit = (event) => {
    event.preventDefault();

    const countryExists = countries.some((country) => country.name === name)
    if (countryExists) {
      alert("이미 존재하는 국가 입니다.");
      return;
    }
    
    const newCountry = {
      name,
      gold,
      silver,
      bronze,
    };


    addCountry(newCountry);

    setName("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  const updateButton = () => {
    event.preventDefault();

    const modifiedCountry = {
      name,
      gold,
      silver,
      bronze,
    };

    modifyCountry(modifiedCountry);

    setName("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  return (
    <div className="updatedbox">
      <h2>2024 파리 올림픽</h2>
      <form>
        <div className="horizontally">
          <div className="input-box">
            <label>국가명 </label>
            <input
              type="type"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="input-box">
            <label>금메달 </label>
            <input
              type="number"
              value={gold}
              min="0"
              max="99"
              onChange={(event) => setGold(event.target.value)}
            />
          </div>
          <div className="input-box">
            <label>은메달</label>
            <input
              type="number"
              value={silver}
              min="0"
              max="99"
              onChange={(event) => setSilver(event.target.value)}
            />
          </div>
          <div className="input-box">
            <label>동메달 </label>
            <input
              type="number"
              value={bronze}
              min="0"
              max="99"
              onChange={(event) => setBronze(event.target.value)}
            />
          </div>
        </div>
        <div className="buttons">
          <button onClick={onSubmit}>국가 추가</button>
          <button onClick={updateButton}>업데이트</button>
        </div>
      </form>
    </div>
  );
};

export default MedalForm;
