import Counter from './Counter'
import './App.css'
import Batman from './Batsman'

function App() {
  
  function handleClick(){
    alert('I am clicked')
  }
  // aerrow function
           const handleClick3 = () =>{
            alert('Clicked 3')
           }

    // add 5
    const handleAdd5 =(num) => {
      const newNum = num + 5;
      alert(newNum)
    }
  return (
    <>
      <h3>vite + React</h3>
      <Batman></Batman>
      <Counter></Counter>
      {/* <button onclick="handleCLick()">Click me</button>//Wrong */}
      {/* noraml way */}
            <button onClick={handleClick}>Click me</button>


      {/* most use aerrow function */}
      <button onClick={handleClick3}>Click Me 3</button>

      {/* deract aerrow function */}
      <button onClick={() => alert('cliked 4')}>Clickd Me 4</button>


{/* add 5 */}
    <button onClick={ () => handleAdd5(10)}>Click Add 5</button>

    </>
  )
}

export default App

