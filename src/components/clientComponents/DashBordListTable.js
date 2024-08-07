"use client";
import React, { useContext, useEffect } from "react";
import styles from "./css/dashboardListtable.module.css";
import SearchBar from "./SearchBar";
import { IoFunnelOutline } from "../ApplicationIcon";
import DashBordTable from "./DashBordTable";
import DashBordTableFooter from "./DashBordTableFooter";
import DynimicTable from "./DynimicTable";
import useTableFillters from "../../custome-hooks/useTableFillters";
import { DashBordContext } from "../../contextApi/DashBordContextApi";
import DateRange from "./tableElements/DateRange";
import LoadingData from "./LoadingData";

export default function DashBordListTable(props) {
  const {
    tableColumns,
    tableSampleData,
    handleCheckboxChange,
    handleDelete,
    handleUpdate,
    handleView,
    handelSingleDelete,
    handelSingleEdit,
    handelswitchToggle,
    dataloading,
  } = props;
  const { visibalRows } = useContext(DashBordContext);

  const {
    totalRows,
    rowsPerPage,
    updateVisibleRows,
    handleRowsPerPageChange,
    nextPage,
    prevPage,
    currentPage,
    upToPage,
    endPage,
    searchByTableFiled,
    filterByDate,
    PriceSorting,
    DateSorting,
    toggle,
    settoggle,
  } = useTableFillters(tableSampleData);

  useEffect(() => {
    if (visibalRows) {
      settoggle(!toggle);
      updateVisibleRows();
    }
  }, [currentPage, rowsPerPage, totalRows]);

  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <div className={styles.table_wrapper}>
          {visibalRows && (
            <div>
              <DynimicTable
                tableColumns={tableColumns}
                tableData={visibalRows}
                handleCheckboxChange={handleCheckboxChange}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                handleView={handleView}
                handleSwitch={handelswitchToggle}
                handlePriceSorting={PriceSorting}
                handleDateSorting={DateSorting}
                handelSingleDelete={handelSingleDelete}
                handelSingleEdit={handelSingleEdit}
              />
              <DashBordTableFooter
                totalRows={totalRows}
                rowsPerPage={rowsPerPage}
                currentPage={currentPage}
                upToPage={upToPage}
                endPage={endPage}
                handelRowPerPage={handleRowsPerPageChange}
                handelNext={nextPage}
                handelPrev={prevPage}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
