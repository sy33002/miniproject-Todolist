import React, { useState } from 'react'

// checkbox와 label을 렌더링하는 투두
export default function Todo({ item, deleteItem, updateItem }) {
  const [todoItem, setTodoItem] = useState(item);
  const { id, title, done } = todoItem;
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
      // Enter를 누른 후에 수정이 되도록
      updateItem(todoItem);
    }
  };

  // title 수정 + rest 파라미터
  const editEventHandler = (e) => {
    const { title, ...rest } = todoItem;
    setTodoItem({
      title: e.target.value,
      ...rest,
    });
  };
  //checkbox 상태 업데이트
  const checkboxEventHandler = (e) => {
    const { done, ...rest } = todoItem;
    const updatedItem = {
      title: e.target.value,
      done: !done,
      ...rest,
    };
    setTodoItem(updatedItem);
    updateItem(updateItem);
  }

  const textClass = done ? 'line-through' : '';

  return (
    <div className='m-3 border-b-4'>
      <input className='font-mono tex-sm'
        type='checkbox' 
        name={`todo${id}`} 
        id={`todo${id}`} 
        defaultChecked={done}
        checked={done}
        onChange={checkboxEventHandler}
      />
      {/* <label htmlFor={`todo${id}`}>{title}</label> */}
      <input type='text'
        value={title} 
        readOnly={readOnly} 
        onClick={offReadOnlyMode}
        onChange={editEventHandler}
        onKeyDown={editKeyEventHandler}
        className={`${textClass} ml-1`}
        />
      <button 
        className='px-2 py-1 bg-gray-500 text-white 
        rounded-md hover:bg-gray-800 focus:outline-none focus:ring 
        focus:ring-gray-200 ml-2 font-mono text-xs' 
      onClick={onDeleteButtonClick}>DELETE</button>
    </div>
  )
}
