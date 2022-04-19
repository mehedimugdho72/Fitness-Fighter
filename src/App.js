import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Register from './Pages/Form/Register/Register';
import Abouth from './Pages/Abouth/Abouth';
import Blogs from './Pages/Blogs/Blogs';
import Review from './Pages/Review/Review/Review';
import Login from './Pages/Form/Login/Login';
import Schedule from './Pages/Home/Schedule/Schedule';
import Admit from './Pages/Admit/Admit';
import AdmitProcess from './Pages/Admit/AdmitProcess/AdmitProcess';
import RequireAuth from './Pages/Other/RequireAuth/RequireAuth';




function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<Abouth></Abouth>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/schedule' element={<Schedule></Schedule>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/admit' element={<Admit></Admit>}></Route>
        <Route path='/admitProcess' element={<RequireAuth>
          <AdmitProcess></AdmitProcess>
        </RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      
      <Footer></Footer>

    </div>
  );
}

export default App;
