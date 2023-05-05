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
function App() {
  return (
    <div className="App">
       
        {/* <Route path='/' element={<Luc></Luc>}></Route>
        <Route path='quang' element={<Quang></Quang>}></Route> */}
        {/* <Route path='news' element={<News></News>}></Route> */}
        <Login/>
      
    </div>
  );
}
export default App;
