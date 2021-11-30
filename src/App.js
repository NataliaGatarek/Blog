import TopBar from "./components/toolbar/TopBar";
import Settings from "./views/settings/Settings";
import Single from "./views/single/Single";
import Write from "./views/write/Write";
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import Home from "./views/home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Routes  } from 'react-router-dom';


function App() {
  const user = false;
  return (
      <Router>
        <TopBar />
      <Routes>
        <>
          <Route path="/" element={<Home />} />

           <Route exact path="/register" element= {user ? <Home/> : <Register/>} />
         
           <Route exact path="/login" element={user ? <Home/> : <Login/>} />
        
          <Route exact path="/write" element={user ? <Write /> : <Register />} />
         
          <Route exact path="/settings" element={user ? <Settings />:<Register/>} />
       
          <Route exact path="/post/:postId" element={ <Single />}/>
          </>
        </Routes>
      </Router>
  );
}

export default App;
