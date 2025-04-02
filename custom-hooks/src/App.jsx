import { useState } from 'react'
import './App.css'
import { usePosts } from './hooks/usePosts';
import { useFetch } from './hooks/useFetch';
import { usePrev } from './hooks/usePrev';

//custom hook should have use at starting
function useCounter(){
  const [count, setCount] = useState(0);
  function increaseCount(){
    setCount(count+1);
  }
  const prev = usePrev(count);
  return{
    count: count,
    increaseCount: increaseCount,
    prev: prev
  }
}

function Counter(){
  //object de structuring
  const {count, increaseCount, prev} = useCounter();
  return <div>
    <h1>Increase {count}</h1>
    <button onClick={increaseCount}>Click me</button>
    <p>This was the previous value {prev}</p>
  </div>
}
function App() {
  const postTitle = usePosts();

  const {finalData,loading} = useFetch("https://jsonplaceholder.typicode.com/todos/4");
  return (
    <>
      <Counter/>
      <div>
      {postTitle}
      </div>
      <div>
      {loading? "Loading....":finalData.title}
        
      </div>
    </>
  )
}

export default App
