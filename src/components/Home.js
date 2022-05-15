// import React, { useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import Loading from "./Loading";
const Home = () => {
  document.title = `Ninja Blogs | Home`;
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  // change document title

  return (
    <div className="home">
      {error && <h2 className="loading">{error}</h2>}
      {isPending && <Loading />}
      {!isPending && (
        <BlogList blogs={blogs} title="All Blogs" isPending={isPending} />
      )}
    </div>
  );
};

export default Home;
