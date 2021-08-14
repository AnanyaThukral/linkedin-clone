import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from './Header';
import './Header.css';
import Sidebar from './Sidebar';
import Feed from './Feed'
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import {auth} from './firebase';

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

   useEffect(()=>{
    auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        //user is logged in
        dispatch(login)
      }else{
        //user is logged out
        dispatch(logout())
      }
    })
  },[]);

  return (
    <div className="app">
      <Header/>

      {!user ? (
        <Login/>
      ) : (
        <div className="app-body">
          <Sidebar/>
          <Feed/>
          {/*widgets*/}
        </div>
      )}
    </div> 
  );
}

export default App;
