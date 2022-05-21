import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Trip from './pages/trip/Trip'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path='/trip'>
          <Route index element={<Trip />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;