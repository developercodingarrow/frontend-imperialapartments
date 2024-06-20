export const userDataColoum = [
  { label: "S No", key: "_id", component: "number" },
  { label: "Image", key: "userImage", component: "singleAvtar" },
  { label: "Date", key: "updatedAt", component: "date" },
  { label: "Status", key: "isActive", component: "dot_text" },
];

export const tableColumns = [
  { label: "", key: "_id", component: "checkbox" },
  { label: "user", key: "imageSrc", component: "singleImage" },
  { label: "Date", key: "date", component: "date" },
  { label: "Status", key: "status", component: "switch" },
  { label: "Price", key: "price", component: "price" },
  { label: "Actions", key: "actions", component: "view" },
];

export const tableData = [
  {
    _id: 1,
    date: "2024-06-11",
    imageSrc: "/web-statice-img/table-circle-imag.jpg",
    status: true,
    price: 4000,
    actions: "/",
    userName: "jone deo",
  },
  {
    _id: 2,
    date: "2024-06-12",
    imageSrc: "/web-statice-img/table-circle-imag.jpg",
    status: true,
    price: 5000,
    actions: "/",
    userName: "ramesh ",
  },

  {
    _id: 3,
    date: "2024-06-10",
    imageSrc: "/web-statice-img/table-circle-imag.jpg",
    status: false,
    price: 3000,
    actions: "/",
    userName: "Suresh ",
  },
  // more rows...
];

export const handleCheckboxChange = (id) => {
  /* handle checkbox change */
  alert("check box");
};
export const handleDelete = (id) => {
  alert("delete box");
};
export const handleUpdate = (id) => {
  alert("update box");
};
export const handleView = (id) => {
  console.log("check id", id);
};
