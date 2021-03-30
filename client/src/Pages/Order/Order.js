import React from "react";
import { Link, Route } from "react-router-dom";
import Restaurent from "../../components/Restaurent/Restaurent";
const Order = ({ match }) => {
  const restaurentList = [
    {
      id: 1,
      name: "Pizza hot",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
      item: "Pizza 4 season",
    },
    {
      id: 2,
      name: "Castello",
      description:
        "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
      item: "Sandwitch thon salami",
    },
    {
      id: 3,
      name: "Lec Coin",
      description:
        "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
      item: "Pizza vegetarienne",
    },
    {
      id: 4,
      name: "Havana",
      description:
        "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
      item: "Cacke tiramisu",
    },
  ];
  var linkList = restaurentList.map((resto) => {
    return (
      <li>
        <Link to={`${match.url}/${resto.name}`}>{resto.name}</Link>
      </li>
    );
  });
  return (
    <div>
      <h3> Restaurants</h3>
      <ul> {linkList} </ul>
      <Route
        path={`${match.url}/:restoName`}
        render={(props) => <Restaurent data={restaurentList} {...props} />}
      />
      <Route
        exact
        path={match.url}
        render={() => <div>Please select a product.</div>}
      />
    </div>
  );
};

export default Order;
