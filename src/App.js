import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router} from "react-router-dom";
import {Routes, Route} from "react-router";
import Posts from "./Pages/Posts";
import PostDetail from "./Pages/PostDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/" element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default App;
