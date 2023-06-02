// import { useState } from "react";

// export default function Pagination({
//   itemsPerPage,
//   totalItems,
//   currentPage,
//   setCurrentPage,
// }) {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   const handleClick = (event, pageNumber) => {
//     event.preventDefault();
//     setCurrentPage(pageNumber);
//   };

//   if (!pageNumbers || pageNumbers.length <= 1) {
//     return null;
//   }

//   return(
//     <nav className="flex justify-center mt-2 "
//   )
// }
