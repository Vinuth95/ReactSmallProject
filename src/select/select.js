import { React, useState } from "react";

function Select() {
  //
  const countries = [
    { name: "india", value: "IN", cities: ["delhi", "mumbai", "kolkata"] },
    { name: "pakistan", value: "PK", cities: ["karachi", "lahore"] },
    { name: "US", value: "US", cities: ["los angeles", "texas"] },
  ];

  const [primaryCountry, setPrimaryCountry] = useState();
  
  return (
    <>
      <select
        name=""
        id=""
        onChange={(e) => {
          setPrimaryCountry(
            e.target.selectedOptions[0].getAttribute("data-index")
          );
        }}
      >
        {countries.map((country, index) => {
          return (
            <option
              key={country.value}
              value={country.value}
              data-index={index}
            >
              {country.name}
            </option>
          );
        })}
      </select>

      <select name="" id="">
        {primaryCountry !== undefined
          ? countries[primaryCountry].cities.map((city, index) => {
              return (
                <option value={city} index={index} key={city}>
                  {city}
                </option>
              );
            })
          : null}
      </select>
    </>
  );
}

export default Select;
