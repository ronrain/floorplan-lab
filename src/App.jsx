import './App.css'
import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'
import Bedroom from './Bedroom'
import Bath from './Bath'

function App() {
  return (
    <div>
      
      <Kitchen />
      <LivingRoom />
      <Bedroom bedNum={1} />
      <Bath size='Half Bath' />
      <Bedroom bedNum={2} />
      <Bath size='Full Bath' />
      <Bedroom bedNum={3} />
    </div>
  )
}

export default App