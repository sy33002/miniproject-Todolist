import { useEffect, useState } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import axios from 'axios';

function App() {
  // console.log(process.env.REACT_APP_DB_HOST); // 환경변수 불러옴
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get(`${process.env.REACT_APP_DB_HOST}/todos`);
      setTodoItems(res.data);
    };

    getTodos();
  }, []);

  // todoItems 상태에 새로운 투두를 추가하는 일
  const addItem = async (newItem) => {
    // newItem.id = todoItems.length + 1;
    // newItem.done = false;
    // setTodoItems([...todoItems, newItem]);

    // axios post (url, 객체{})
    const res = await axios.post(
      `${process.env.REACT_APP_DB_HOST}/todo`,
      newItem
    );
    console.log(res.data);
    setTodoItems([...todoItems, res.data]);
  };

  const deleteItem = async (id) => {
    // const newTodoList = todoItems.filter((item) => (item.id !== id));
    // setTodoItems(newTodoList);
    const res = await axios.delete(
      `${process.env.REACT_APP_DB_HOST}/todo/${id}`
    );
    if (res.status === 200) {
      const updatedItems = todoItems.filter((item) => item.id !== id);
      setTodoItems(updatedItems);
    } else {
      alert('삭제실패!');
    }
  };

  const updateItem = async (targetItem) => {
    await axios.patch(
      `${process.env.REACT_APP_DB_HOST}/todo/${targetItem.id}`,
      targetItem
    );
  };

  return (
    <div className="App flex flex-col items-center">
      <h1 className="bg-blue-500 p-4 container mx-auto text-3xl font-bold text-white hover:underline">todoList</h1>
      <p className='font-mono text-xs text-gray my-2'>Todo Count: {todoItems.length}</p>
      <div className="flex items-center justify-center w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-3">
        <AddTodo addItem={addItem} />
      </div>
      {/* todoItems 반복, props 데이터 넘김 */}
      {todoItems.map((item) => (
        <Todo
          key={item.id}
          item={item}
          deleteItem={() => deleteItem(item.id)}
          updateItem={updateItem}
        />
      ))}
    </div>
  );
  
}

export default App;
