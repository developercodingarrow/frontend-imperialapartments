"use client";
import React, { useState, useEffect, useContext, useRef } from "react";
import {
  goToNextPage,
  goToPreviousPage,
} from "../components/clientComponents/tablefillterLogic/tablepaginationLogic";
import { DashBordContext } from "../contextApi/DashBordContextApi";

export default function useTableFillters(initialRows, initialRowsPerPage = 5) {
  const { visibalRows, setvisibalRows } = useContext(DashBordContext);
  const totalRows = initialRows?.length ?? 0;
  const [rowsPerPage, setrowsPerPage] = useState(initialRowsPerPage);
  const [currentPage, setcurrentPage] = useState(1);
  const [upToPage, setupToPage] = useState(0);
  const [startPage, setstartPage] = useState(1);
  const [endPage, setendPage] = useState(initialRowsPerPage);

  // For Next page
  const nextPage = () => {
    const totalPages = Math.ceil(totalRows / rowsPerPage);
    if (currentPage < totalPages) {
      setcurrentPage(currentPage + 1);
      let startpageIndex = (currentPage - 1) * rowsPerPage;
      const endPageIndex = currentPage * rowsPerPage;
      setendPage(endPageIndex);
    }
  };

  // For Previous page
  const prevPage = () => {
    // goToPreviousPage(currentPage, setcurrentPage);
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
    }
  };

  // ROW PER PAGE LOGIC
  const handleRowsPerPageChange = (selectorVal) => {
    setrowsPerPage(selectorVal);
    setcurrentPage(1); // Reset to first page when changing rows per page
    updateVisibleRows();
  };

  // table Search Logic
  const searchByTableFiled = (searchTerm, field) => {
    if (!searchTerm) {
      updateVisibleRows(initialRows); // Return the original data if the searchTerm is not provided.
    }
    let filteredData;
    filteredData = initialRows.filter((item) => {
      if (
        item[field] &&
        item[field].toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return true;
      }
      return false;
    });

    updateVisibleRows(filteredData);
  };

  const updateVisibleRows = (data) => {
    let rowsToDisplay = data || initialRows; // Use sorted data if available
    let startpageIndex = (currentPage - 1) * rowsPerPage;
    const endPageIndex = currentPage * rowsPerPage;
    const updatedVisibleRows = rowsToDisplay.slice(
      startpageIndex,
      endPageIndex
    );
    setvisibalRows(updatedVisibleRows);
  };

  return {
    totalRows,
    rowsPerPage,
    currentPage,
    upToPage,
    endPage,
    nextPage,
    prevPage,
    searchByTableFiled,
    updateVisibleRows,
    handleRowsPerPageChange,
  };
}
