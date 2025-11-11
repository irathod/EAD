import './App.css'
import Timer from './Timer'
import GetData from './GetData'

const App = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Timer Section */}
      <h1>Timer Component</h1>
      <Timer />

      <hr style={{ margin: "40px 0" }} />

      {/* GetData Section */}
      <h1>GetData Component</h1>
      <GetData />
    </div>
  )
}

export default App
