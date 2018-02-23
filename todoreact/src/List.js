import React from 'react';

const List = props => (
  <ul>
      <h1>TODO's</h1>
    {
      props.items.map((item, index) => <li key={index}>{item}</li>)
    }
  </ul>
);

export default List;
