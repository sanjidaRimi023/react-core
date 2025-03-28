
import './App.css'
import Baller from './boller'
import Counter from './counter'
import Batsman from './runcount'


function App() {
  function hendleButton() {
    alert("the button was chicked")
  }

  const headleBtn = () => {
    alert("submit done")
  }

  const btn = (num) => {
    const newNumber = num + 5;
    alert(newNumber);
  }
  return(
    <>
      <h1>React Core Part Two</h1>
      <Counter></Counter>
      <Batsman></Batsman>
      <Baller></Baller>



      {/* <button onClick={hendleButton}>click me</button>
      <button onClick={headleBtn}>submit</button>
      <button onClick={()=> btn(4)}>All Done</button> */}

    </>
  )
}

export default App
