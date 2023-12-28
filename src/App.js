import CountdownTimer from "./CountdownTimer";
import Home from "./Home";
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import UserList from "./UserList";


function App() {
  return (
    <Router>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task1" element={<CountdownTimer />} />
          <Route path="/task2" element={<UserList />} />
       </Routes>
    </Router>
  );
}

export default App;
