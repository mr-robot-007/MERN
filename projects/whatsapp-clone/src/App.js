
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

function App() {
  return (
    //BEM naming convention
    <div className="app">
      {/* <h1>Lets build a whatsapp clone</h1> */}

      <div className="app__body">

        <Sidebar />
        <Chat />

      </div>
    </div>
  );
}

export default App;
