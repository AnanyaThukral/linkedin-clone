import './App.css';
import Header from './Header';
import './Header.css';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Header/>
      {/*App Body*/}
      <div className="app-body">
        <Sidebar/>
        {/*Feed*/}
        {/*widgets*/}
      </div>
    </div>
  );
}

export default App;
