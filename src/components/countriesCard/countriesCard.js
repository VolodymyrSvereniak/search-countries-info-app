import Card from "./Card";

export const countriesCard = (countries) =>
  countries.map((country) => {
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
    };
    return <Card key={country.cca3} {...countriesInfo} />;
  });
