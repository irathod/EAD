
import React, { useState, useEffect } from "react";  // Import useState and useEffect

const GetData = () => {
  const [print, setPrint] = useState([]);

  const URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const ApiCalls = async (apiURL) => {
      const response = await fetch(apiURL);
      console.log(response);
      const data = await response.json();
      console.log(data);
      setPrint(data);
    };
    ApiCalls(URL);
  }, []); // Run once on mount

  return (
    <div>
      {print.map(function (eachitem) {
        return (
          <div key={eachitem.id}>
            <h2>{eachitem.name}</h2>
            <p> {eachitem.username}</p>
            <h2>{eachitem.email}</h2>
            <h2>{eachitem.address.street}</h2>
            <h2>{eachitem.address.suite}</h2>
            <h2>{eachitem.address.city}</h2>
            <h2>{eachitem.address.zipcode}</h2>
            <h2>{eachitem.phone}</h2>
            <h2>{eachitem.website}</h2>
            <h2>{eachitem.company.name}</h2>
            <h2>{eachitem.company.catchPhrase}</h2>
            <h2>{eachitem.company.bs}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default GetData;