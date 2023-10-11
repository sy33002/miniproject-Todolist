import React from 'react'

// checkbox와 label을 렌더링하는 투두
export default function Todo({item, deleteItem}) {
  const { id, title, done } = item;

  const onDeleteButtonClick = (id) => {
    console.log(id);
    deleteItem(id);
  }
  return (
    <div>
      <input 
        type='checkbox' 
        name={`todo${id}`} 
        id={`todo${id}`} 
        defaultChecked={done}/>
      <label htmlFor={id}>{title}</label>
      <button onClick={() => onDeleteButtonClick(item.id)}>DELETE</button>
    </div>
  )
}
