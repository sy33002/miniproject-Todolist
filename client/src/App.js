import { useEffect, useState } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import axios from 'axios';

function App() {
  console.log(process.env.REACT_APP_DB_HOST); // 환경변수 불러옴
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    const getTodos = async() => {
      const res = await axios.get(`${process.env.REACT_APP_DB_HOST}/todos`);
      setTodoItems(res.data);
    };

    getTodos();
  }, []);

  // todoItems 상태에 새로운 투두를 추가하는 일
  const addItem = (newItem) => {
    newItem.id = todoItems.length + 1;
    newItem.done = false;
    setTodoItems([...todoItems, newItem]);
  };

  const deleteItem = (id) => {
    const newTodoList = todoItems.filter((item) => (item.id !== id));
    setTodoItems(newTodoList);
  };

  return (
    <div>
       <h1 className="text-3xl font-bold underline">todoList</h1>
      <AddTodo addItem={addItem}/>
      {/* todoItems 반복, props 데이터 넘김 */}
      {todoItems.map((item) => (
        <Todo key={item.id} item={item} deleteItem={() => deleteItem(item.id)}
        />
      ))}
    </div>
  );
};

export default App;
