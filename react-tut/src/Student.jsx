import React from 'react'
import PropTypes from "prop-types";

/* 
    Example of Props
    props - read-only properties that are shared between components.
            A parent component can send data a child component using props.
            <Component key = {value} />
            key - the name of the prop
            value - the value of the prop
            props.key - access the value of the prop
*/

export default function Student(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? 'Yes' : 'No'}</p>
    </div>
  )
}

Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    isStudent: PropTypes.bool.isRequired,
}

Student.defaultProps = {
    name: 'John Doe',
    age: 18,
    isStudent: false,
}