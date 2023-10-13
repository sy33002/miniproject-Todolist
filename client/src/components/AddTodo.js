import React, { useState } from 'react';

export default function AddTodo({addItem}) {
    const [todoItem, setTodoItem] = useState({
        title: '',
    });

    const onButtonClick = () => {
        addItem(todoItem);
        setTodoItem({title: ''});
    };

  return (
    <div className='border border-gray-300'>
        <input
            type="text" placeholder='Add your new todo'
            value={todoItem.title}
            onChange={(e) => setTodoItem({title: e.target.value})}
        />
        <button className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-200"
         onClick={onButtonClick}>ADD</button>
    </div>
  )
}
