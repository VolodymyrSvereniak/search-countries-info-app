import Card from "./Card/Card";

const countriesCard = (countries, handleNavigate) =>
  countries?.map((country) => {
    const countriesInfo = {
      img: country.flags.png,
      name: country.name.common,
      info: [
        {
          title: "Population",
          description: country.population.toLocaleString("en-US"),
        },
        {
          title: "Region",
          description: country.region,
        },
        {
          title: "Capital",
          description: country.capital[0],
        },
      ],
      handleNavigate: () => handleNavigate(country.name.common),
    };
    return <Card key={country.cca3} {...countriesInfo} />;
  });

export default countriesCard;