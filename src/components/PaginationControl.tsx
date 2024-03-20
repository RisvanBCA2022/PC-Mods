import React from 'react';

const PaginationControls = ({ totalPages, currentPage, setCurrentPage }:any) => {
  const visiblePages = [];
  const numPagesToShow = 3; // Number of pages to show before and after the current page
  const maxVisiblePages = numPagesToShow * 2 + 1; // Total number of visible pages including current page

  // If there are more pages than the max visible pages, determine which pages to display
  if (totalPages > maxVisiblePages) {
    let startPage = Math.max(1, currentPage - numPagesToShow);
    let endPage = Math.min(totalPages, currentPage + numPagesToShow);

    // Adjust start and end pages if we're at the beginning or end of the list
    if (currentPage <= numPagesToShow) {
      endPage = maxVisiblePages;
    } else if (currentPage >= totalPages - numPagesToShow) {
      startPage = totalPages - maxVisiblePages + 1;
    }

    // Add visible pages
    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i);
    }
  } else {
    // If there are fewer pages than the max visible pages, display all pages
    for (let i = 1; i <= totalPages; i++) {
      visiblePages.push(i);
    }
  }

  return (
    <ol className="flex justify-center text-xs font-medium space-x-1">
      <li>
        <button
          onClick={() => setCurrentPage(1)}
          className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded"
          disabled={currentPage === 1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </li>

      {visiblePages.map((pageNumber, index) => (
        <React.Fragment key={pageNumber}>
          {index > 0 && visiblePages[index - 1] !== pageNumber - 1 && (
            <li>
              <span className="block w-8 h-8 text-center border border-gray-100 rounded leading-8">...</span>
            </li>
          )}
          <li>
            <button
              onClick={() => setCurrentPage(pageNumber)}
              className={`block w-8 h-8 text-center border border-gray-100 rounded leading-8 ${currentPage === pageNumber ? 'bg-blue-600 text-white border-blue-600' : ''}`}
            >
              {pageNumber}
            </button>
          </li>
        </React.Fragment>
      ))}

      <li>
        <button
          onClick={() => setCurrentPage(totalPages)}
          className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded"
          disabled={currentPage === totalPages}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10l-3.293-3.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </li>
    </ol>
  );
};

export default PaginationControls;
