const URL =
  "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";

const getSkips = () => {
  return fetch(URL)
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export default getSkips;
