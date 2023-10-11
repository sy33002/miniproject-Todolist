import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import { useState } from 'react';

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: 'my todo1',
      done: false,
    },
    {
      id: 2,
      title: 'my todo2',
      done: false,
    },
    {
      id: 3,
      title: 'my todo3',
      done: true,
    },
    {
      id: 4,
      title: 'my todo4',
      done: false,
    },
  ]);

  // todoItems 상태에 새로운 투두를 추가하는 일
  const addItem = (newItem) => {
    // concat version!!
    // const newTodoList = todoItems.concat({id: todoItems.length+1, title: newItem.title, done: false});
    // setTodoItems(newTodoList)
    newItem.id = todoItems.length + 1;
    newItem.done = false;
    setTodoItems([...todoItems, newItem]);
  };

  const deleteItem = (id) => {
    const newTodoList = todoItems.filter((item) => (item.id !== id));
    setTodoItems(newTodoList);
  };

  return (
    <div className="App">
      <AddTodo addItem={addItem}/>
      {/* todoItems 반복, props 데이터 넘김 */}
      {todoItems.map((item) => (
        <Todo key={item.id} item={item} 
        deleteItem={() => deleteItem(item.id)}
        />
      ))}
    </div>
  );
};

export default App;
