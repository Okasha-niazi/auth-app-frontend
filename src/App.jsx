
import FigmaBtn from './component/FigmaBtn';
import Home from './pages/home';
import List from './pages/list';
import Login from './pages/login';
import Register from './pages/register';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    
<Routes>
  <Route path='/' element={<Register/>} />
  <Route path='/login' element={<Login/>} />
  <Route path='/list' element={<List/>} />
  <Route path='/home' element={<Home/>} />
  <Route path='/figmabtn' element={<FigmaBtn/>} />
</Routes>    
  );
}

export default App;