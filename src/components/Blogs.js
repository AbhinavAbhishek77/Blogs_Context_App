import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
// import Spinner from "./Spinner";

const Blogs = () => {
  //Consume
  const { posts, loading } = useContext(AppContext);
  console.log("printing inside blog components");
  console.log(posts);
  return (
    <div className="flex flex-col my-8 gap-y-10">
      {loading ? (
        <div className=" min-h-[80vh] w-full flex justify-center items-center ">
          <p className=" text-center font-bold text-3xl">Loading</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">No Post Found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id} className=" max-w-2xl w-11/13 mx-auto">
            <p className=" font-bold text-lg">{post.title}</p>
            <p className=" text-sm my-1">
              By <span className=" italic">{post.author}</span> on{" "}
              <span className=" underline font-semibold cursor-pointer">
                {post.category}
              </span>
            </p>
            <p className=" text-sm">Posted On {post.date}</p>
            <p className=" mt-4 mb-2">{post.content}</p>
            <div className=" flex flex-wrap gap-x-2 items-center">
              {post.tags.map((tag, index) => {
                return (
                  <span
                    className=" text-blue-700 cursor-pointer underline font-semibold text-xs"
                    key={index}
                  >{`#${tag}`}</span>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;

// import React, { useContext } from "react";
// import { AppContext } from "../context/AppContext";
// import Spinner from "./Spinner";
// // import "./Blogs.css";

// const Blogs = () => {
//   //consume
//   const { posts, loading } = useContext(AppContext);
//   console.log("Printing inside blogs component");
//   console.log(posts);

//   return (
//     <div className="w-11/12 max-w-[670px] h-screen py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px]  justify-center items-center">
//       {loading ? (
//         <Spinner />
//       ) : posts.length === 0 ? (
//         <div>
//           <p>No Post Found</p>
//         </div>
//       ) : (
//         posts.map((post) => (
//           <div key={post.id}>
//             <p className="font-bold text-lg ">{post.title}</p>
//             <p className="text-sm mt-[4px]">
//               By <span className="italic">{post.author}</span> on{" "}
//               <span className="underline font-bold">{post.category} </span>
//             </p>
//             <p className="text-sm mt-[4px]">Posted on {post.date}</p>
//             <p className="text-md mt-[14px]">{post.content}</p>
// <div className="flex gap-x-3">
//   {post.tags.map((tag, index) => {
//     return (
//       <span
//         key={index}
//         className="text-blue-700 underline font-bold text-xs mt-[5px]"
//       >{` #${tag}`}</span>
//     );
//   })}
// </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Blogs;
