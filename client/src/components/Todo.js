import React, { useState } from 'react'

// checkbox와 label을 렌더링하는 투두
export default function Todo({ item, deleteItem }) {
  const [todoItem, setTodoItem] = useState(item);
  const { id, title, done } = item;
  const [readOnly, setReadOnly] = useState(true);

  const onDeleteButtonClick = () => {
    deleteItem(todoItem);
  }

  //  title 클릭하면 readOnly를 수정 가능하도록!
  const offReadOnlyMode = () => {
    setReadOnly(false);
  };
  // enter 키 누르면 readOnly true로 변경
  const editKeyEventHandler =(e) => {
    if (e.key === 'Enter') {
      setReadOnly(true);
    }
  };
  // title 수정
  // rest 파라미터
  const editEventHandler = (e) => {
    const {title, ...rest} = todoItem;
    setTodoItem({
      title: e.target.value,
      ...rest,
    });
  };
  //checkbox 상태 업데이트
  const checkboxEventHandler = (e) => {
    const {done, ...rest} = todoItem
    setTodoItem( {
      done: e.target.checked, 
      ...rest,
    })
  }
  return (
    <div>
      <input 
        type='checkbox' 
        name={`todo${id}`} 
        id={`todo${id}`} 
        defaultChecked={done}
        onChange={checkboxEventHandler}
      />
      {/* <label htmlFor={`todo${id}`}>{title}</label> */}
      <input type='text'
        value={todoItem.title} 
        readOnly={readOnly} 
        onClick={offReadOnlyMode}
        onChange={editEventHandler}
        onKeyDown={editKeyEventHandler}
      />
      <button onClick={onDeleteButtonClick}>DELETE</button>
    </div>
  )
}
