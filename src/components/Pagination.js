import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, totalPages, handlePageChange } = useContext(AppContext);
  return (
    <div className=" fixed bottom-0 inset-x-0 bg-white py-2 border-t-2 border-t-gray-300">
      <div className=" flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto">
        {page > 1 && (
          <button onClick={() => handlePageChange(page - 1)}
           className="border-2 border-gray-300 py-1 px-4 rounded-md"
          
          >Previous</button>
        )}

        {page < totalPages && (
          <button onClick={() => handlePageChange(page + 1)}
           className="border-2 border-gray-300 py-1 px-4 rounded-md"
           >Next</button>
        )}

        <p className="text-sm font-semibold ml-auto">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;

// import React from "react";
// import { useContext } from "react";
// import { AppContext } from "../context/AppContext";

// const Pagination = () => {
//   const { page, handlePageChange, totalPages } = useContext(AppContext);

//   return (
//     <div className="w-full flex justify-center items-center border-2 fixed bottom-0 bg-white">
//       <div className="flex justify-between w-11/12 max-w-[670px] py-2">
//         <div className="flex gap-x-2">
//           {page > 1 && (
//             <button
//               className="rounded-md border-2 px-4 py-1"
//               onClick={() => handlePageChange(page - 1)}
//             >
//               Previous
//             </button>
//           )}

//           {page < totalPages && (
//             <button
//               className="rounded-md border-2 px-4 py-1"
//               onClick={() => handlePageChange(page + 1)}
//             >
//               Next
//             </button>
//           )}
//         </div>

//         <p className="font-bold text-sm">
//           Page {page} of {totalPages}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Pagination;
