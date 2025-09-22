// Custom hook for pagination.Takes wines array and number of itemsPerPage parameters for pagination, divides an array of items into pages and calculates total pages and returns an object with array of pages and total number of pages..
export const usePagination = ({ wines, itemsPerPage }) => {
  // Array to store pages of items
  const arrayOfPages = [];
  // Calculate total pages rounding up (ceil())
  const totalPages = Math.ceil(wines.length / itemsPerPage);

  // Loop through array of wines and slice array based on itemsPerPage number of items
  //start from 0 and iterate up to total number of pages
  for (let i = 0; i < totalPages; i++) {
    // Start index for slicing array
    const start = i * itemsPerPage;
    // End index for slicing array
    const end = start + itemsPerPage;
    // Slice wines array to get current page items
    const currentPageWines = wines.slice(start, end);
    // Add current page items to arrayOfPages
    arrayOfPages.push(currentPageWines);
  }

  // Return array of pages and total page count
  return { arrayOfPages, totalPages };
};
