import { useState } from "react";

export default function Pagination({
  itemsPerPage,
  totalItems,
  currentPage,
  setCurrentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (event, pageNumber) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };

  if (!pageNumbers || pageNumbers.length <= 1) {
    return null;
  }

  return (
    <nav className="flex justify-center mt-2 xl:w-[1250px] lg:w-[1010px] md:w-[760px] sm:w[620px]">
      <ul className="flex m-1 p-1">
        <li>
          <button
            className="p-1 px-3 m-1 bg-gray-200 text-gray-700 hover:bg-gray-400 hover:text-gray-900 rounded"
            disabled={currentPage === 1}
            onClick={(event) => handleClick(event, currentPage - 1)}
          >
            Previous
          </button>
        </li>
        <li className="p-1 px-3 m-1 bg-gray-200 text-gray-700  hover:bg-gray-400 hover:text-gray-900 rounded">
          {currentPage / { pageNumbers, length }}
        </li>
        <li>
          <button
            className="p-1 px-3 m-1 bg-gray-200 text-gray-700 hover:bg-gray-400 hover:text-gray-900 rounded"
            disabled={currentPage === pageNumbers.length}
            onClick={(event) => handleClick(event, currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}
