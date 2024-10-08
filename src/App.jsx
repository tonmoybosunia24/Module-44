import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import LineChart from './Components/LineChart/LineChart'
import Navber from './Components/Navber/Navber'
import Phones from './Components/Phones/Phones'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {
  return (
    <>
      <Navber></Navber>
      {/* <DaisyNav></DaisyNav> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
