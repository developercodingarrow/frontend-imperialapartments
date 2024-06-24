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
  } = useTableFillters(tableSampleData);

  useEffect(() => {
    updateVisibleRows();
  }, []);

  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <div className={styles.table_fillterBar}>
          <div className={styles.header_left}>
            <div>
              <SearchBar
                handelTableDatasearch={searchByTableFiled}
                fieldName="userName"
                placeholder="Search By User Name"
              />
            </div>

            <div>
              <SearchBar
                handelTableDatasearch={searchByTableFiled}
                fieldName="email"
                placeholder="Search By Email Address..."
              />
            </div>
            <div>
              <DateRange handelDateRange={filterByDate} />
            </div>
          </div>
          <div className={styles.header_right}>
            <div className={styles.fillter_iconWrapper}>
              <IoFunnelOutline />
            </div>
          </div>
        </div>

        <div className={styles.table_wrapper}>
          {visibalRows.length >= 1 ? (
            <div>
              <DynimicTable
                tableColumns={tableColumns}
                tableData={visibalRows}
                handleCheckboxChange={handleCheckboxChange}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                handleView={handleView}
                handlePriceSorting={PriceSorting}
                handleDateSorting={DateSorting}
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
          ) : (
            <LoadingData />
          )}
        </div>
      </div>
    </div>
  );
}
