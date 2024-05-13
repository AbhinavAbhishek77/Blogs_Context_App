import { Headers } from "./components/Headers";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css";

function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  useEffect(() => {
    fetchBlogPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className=" w-full h-full flex flex-col justify-center items-center">
      <Headers />
      <Blogs />
      <Pagination />
    </div>
  );
}

export default App;
