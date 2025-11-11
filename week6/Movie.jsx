import React from "react";

function Movie({ name, age, mail, phone, address }) {
  return (
    <div>
      Name: {name} <br />
      Age: {age} <br />
      Mail: {mail} <br />
      Phone: {phone} <br />
      Address: {address}
    </div>
  );
}

export default Movie;
