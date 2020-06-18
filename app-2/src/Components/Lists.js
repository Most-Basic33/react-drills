import React, {
  Component
} from 'react';

const List = (list) => {

  let newArray = list.thing.map((element, i, a) => (
    <div> {
      element.name
    } </div>
  ))
  return (
    <div>
      {newArray}
    </div>
  )
}
export default List