import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";
import { useCities } from "../contexts/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by adding a city on your map!" />
    );

  const countries = cities.reduce((countriesArr, city) => {
    if (!countriesArr.map((item) => item.country).includes(city.country)) {
      return [...countriesArr, { country: city.country, emoji: city.emoji }];
    } else {
      return countriesArr;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
