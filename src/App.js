import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <h1>hello, world!</h1>

      {/* Header */}
      <Header />
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        {/* React-Router - Chat screen */}
      </div>
    </div>
  );
}

export default App;
