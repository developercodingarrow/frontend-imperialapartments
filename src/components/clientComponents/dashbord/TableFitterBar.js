import React from "react";
import SearchBar from "../SearchBar";

export default function TableFitterBar() {
  return (
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
  );
}
