import State from './Componenet/Product/Showproduct';
import './App.css';
import Show from './Componenet/Show/Show';
import Showproduct from './Componenet/Product/Showproduct';
import Showpro from './Componenet/Product/Showpro'
import Showpromax from './Componenet/Product/Showpromax'
import Showdata from './Componenet/UsingAPI/Showdata';
import White from './Componenet/UsingAPI/Showdata';
import {Route,Routes} from "react-router-dom"
import { Luc } from './Componenet/HiRouter/Luc';
import { Quang } from './Componenet/HiRouter/Quang';
import { News } from './Componenet/HiRouter/News';
import Login from './Componenet/ValidataForm/Login';
import Showtt from './Componenet/Show/Shownew';
import Pro from './Componenet/Product/Showpromax';
function App() {
  return (
    <div className="App">
       {/* <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/quang' element={<Quang></Quang>}></Route> 
        <Route path='/news' element={<News></News>}></Route>
        </Routes> */}
        <Pro/>
    </div>
  );
}
export default App;
