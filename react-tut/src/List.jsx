import React from "react";
import PropTypes from "prop-types";

export default function List(props) {
  props.names.sort();

  const nameList = props.names.map((name, index) => (
    <li key={index}>{name}</li>
  ));

  
//   fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical order
//   fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse alphabetical order

    props.fruits.sort((a, b) => a.colories - b.colories); // Numerical order
    // fruits.sort((a, b) => b.colories - a.colories); // Reverse numerical order

  const fruitList = props.fruits.map((fruit) => (
    <li key={fruit.name}>
      {fruit.name} - {fruit.colories}
    </li>
  ));

  const lowColories = props.fruits.filter((fruit)=> fruit.colories < 200 );

  const lowColoriesList = lowColories.map((fruit) => (
    <li key={fruit.name}>
      {fruit.name} - {fruit.colories}
    </li>
  ));

  return (
    <>
      <ul>{nameList}</ul>
      <ul>{fruitList}</ul>
      <ul>{lowColoriesList}</ul>
    </>
  );
}

List.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  fruits: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      colories: PropTypes.number.isRequired,
    })
  ).isRequired,
};