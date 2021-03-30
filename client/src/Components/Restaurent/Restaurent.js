import React from 'react';

const Restaurent = ({ match, data }) => {
  var resto = data.find((el) => el.name == match.params.restoName); /*mathod find() returns first 'element' in table data which is the whole 'object' that satisfy the test */
  var restoData;
  console.log(resto);
  if (resto)
    restoData = (
      <div>
        <hr />
        <h3> {resto.name} </h3>
        <p>{resto.description}</p>
        <h4>{resto.item}</h4>{" "}
      </div>
    );
  else restoData = <h2> Sorry. Product doesnt exist </h2>;
  return (
    <div>
      <div>{restoData}</div>
    </div>
  );
};

export default Restaurent
