// NEXT PAGE LOGIC
export const goToNextPage = (
  currentPage,
  totalRows,
  rowsPerPage,
  setCurrentPage
) => {
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  if (currentPage < totalPages) {
    setCurrentPage(currentPage + 1);
  }
};

// PREVIOUS PAGE LOGIC
export const goToPreviousPage = (currentPage, setCurrentPage) => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
};
