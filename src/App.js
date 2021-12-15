
import { useState } from "react";
import './App.css';
import Header from './components/Header';
import NotesPage from './pages/NotesPage';
import {Routes, Route} from "react-router-dom";
import NotePage from './pages/NotePage';

function App() {
  const [theme,setTheme] = useState("dark")
  const changeTheme = ()=>{
    theme!=="dark"? setTheme("dark"):setTheme("")
  }
  return (
    
    <div className={`container ${theme}`}>
    <div className="app">
       <Header theme={theme}  onChangeTheme={changeTheme} />
       <Routes>
          <Route path="/" element={<NotesPage />} exact/>
          <Route path="/note/:id" element={<NotePage />} />
        </Routes>
    </div>
    </div>
  );
}

export default App;
