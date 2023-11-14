import "./styles.css";
import Parse from "./components/Parse/Parse";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import UploadDnD from "./components/UploadDnD";
import Banner from "./components/Banner";
import PostList from "./components/posts/postList";
import Buttons from "./components/Buttons";
import Postfixdata from "./components/posts/post2";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>
        <BrowserRouter>
          <Banner />

          <Routes>
            <Route path="/uploadDnD" element={<UploadDnD />} />
            <Route path="/post_list" element={<PostList />} />
            <Route path="/post2" element={<Postfixdata />} />

            <Route path="/parse" element={<Parse />} />
            <Route path="/buttons" element={<Buttons />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
