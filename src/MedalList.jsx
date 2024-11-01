
const MedalList = ({countries,deleteCountry}) => {

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>
          국가명 {country.name} : <br/> 금메달 {country.gold}, 은메달 {country.silver}
          , 동메달 {country.bronze}
          <button onClick={() => deleteCountry(country.name)}>삭제</button>
        </li>
      ))}
    </ul>
  );
};

export default MedalList;
