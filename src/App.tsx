import { useState } from "react";

export function App() {

  const [count, setCount] = useState(1);

  const countFunction = (num: number) =>{
    setCount(count + num)
  }

  return (
    <>
      <header >
        <h1>Hola mundo</h1>
        <p>Primera app</p>
        <p>Cambio numero 2</p>
        <h3>Contador: { count }</h3>
        <button
          onClick={()=>countFunction(1)}
        >
          +1</button>

        <button
          onClick={()=>countFunction(-1)}
        >
          -1</button>
      </header>
    </>
  );
}
