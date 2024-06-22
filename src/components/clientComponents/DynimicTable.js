"use client";
import React, { useState, useEffect } from "react";
import styles from "./css/dynimicTable.module.css";
import { IoIosArrowRoundDown } from "../ApplicationIcon";
import TableCheckBox from "./tableElements/TableCheckBox";
import TableDate from "./tableElements/TableDate";
import TableStatus from "./tableElements/TableStatus";
import TablePrice from "./tableElements/TablePrice";
import TableActionPoint from "./tableElements/TableActionPoint";
import AvtarImageText from "./tableElements/AvtarImageText";
export default function DynimicTable(props) {
  // Initialize sort states object
  const initialSortStates = {};
  props.tableColumns.forEach((column) => {
    if (column.sortable) {
      initialSortStates[column.key] = true; // Default sort direction (true for ascending)
    }
  });

  const [sortStates, setSortStates] = useState(initialSortStates);
  const [dataOder, setdataOder] = useState(true);

  const {
    tableData,
    tableColumns,
    handleCheckboxChange,
    handleDelete,
    handleUpdate,
    handleView,
    handlePriceSorting,
    handleDateSorting,
  } = props;

  const handlers = {
    checkbox: handleCheckboxChange,
    delete: handleDelete,
    switch: handleCheckboxChange,
    view: handleView,
    singleImage: handleView,
    price: handlePriceSorting,
    updatedAt: handleDateSorting,
  };

  const handleSorting = (columnKey) => {
    if (handlers[columnKey]) {
      setdataOder(!dataOder);
      handlers[columnKey](dataOder);

      // Toggle sort direction for the clicked column
      setSortStates((prevSortStates) => ({
        ...prevSortStates,
        [columnKey]: !prevSortStates[columnKey],
      }));
    }
  };

  const getSortIconStyle = (columnKey) => {
    return sortStates[columnKey]
      ? `${styles.span_icon_style} ${styles.span_down_icon}`
      : `${styles.span_icon_style} ${styles.span_up_icon}`;
  };

  return (
    <div className={styles.com_container}>
      <div className={styles.inner_container}>
        <table className={styles.table_style}>
          <thead className={styles.table_head_style}>
            <tr className={styles.thead_tr_style}>
              {tableColumns.map((column) => (
                <th key={column.id} className={styles.table_th_style}>
                  <span className={styles.th_span_style}>
                    {column.label === "" ? (
                      <>
                        <input type="checkbox" />
                        {column.label}
                      </>
                    ) : (
                      <>
                        {column.label}
                        <span
                          className={getSortIconStyle(column.key)}
                          onClick={() => handleSorting(column.key)}
                        >
                          <IoIosArrowRoundDown />
                        </span>
                      </>
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.table_body_style}>
            {tableData.map((row, no) => (
              <tr key={row.id} className={styles.tr_style}>
                {tableColumns.map((column) => {
                  const { content, className } = renderCellContent(
                    no,
                    row[column.key],
                    row._id,
                    row.updatedAt,
                    row.imageSrc,
                    row.slug,
                    column.component,
                    row.userName,
                    row.email,
                    handlers[column.component]
                  );

                  return (
                    <td
                      key={column.label}
                      className={`${styles.td_style} ${styles[className]}`}
                    >
                      {content}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const renderCellContent = (
  indexNo,
  data,
  id,
  date,
  image,
  slug,
  componentType,
  userName,
  email,
  handler
) => {
  let content = null;
  let className = "";

  switch (componentType) {
    case "number":
      content = indexNo + 1;
      className = "numberCell";
      break;
    case "text":
      content = data;
      className = "text-cell";
      break;
    case "price":
      content = <TablePrice price={data} />;

      break;
    case "date":
      content = <TableDate data={date} />;

      break;
    case "checkbox":
      if (handler) {
        content = <TableCheckBox />;
        className = "checkBoxtr_style";
      }
      break;
    case "switch":
      if (handler) {
        content = <TableStatus status={data} />;
      }
      break;
    case "delete":
      if (handler) {
        content = <button onClick={() => handler(id)}>Delete</button>;
        className = "delete-cell";
      }
      break;
    case "update":
      if (handler) {
        content = <button onClick={() => handler(id)}>Update</button>;
        className = "update-cell";
      }
      break;
    case "view":
      if (handler) {
        content = <TableActionPoint onClick={handler} itemId={id} />;
      }
      break;
    case "singleImage":
      if (handler) {
        content = (
          <AvtarImageText image={image} name={userName} email={email} />
        );
      }
      break;
    default:
      content = data;
      break;
  }

  return {
    content,
    className,
  };
};
