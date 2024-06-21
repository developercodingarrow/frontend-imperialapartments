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
  {
    _id: 4,
    date: "2024-06-10",
    imageSrc: "/web-statice-img/table-circle-imag.jpg",
    status: false,
    price: 3000,
    actions: "/",
    userName: "Suresh ",
  },
  {
    _id: 5,
    date: "2024-06-10",
    imageSrc: "/web-statice-img/table-circle-imag.jpg",
    status: false,
    price: 3000,
    actions: "/",
    userName: "Suresh ",
  },
  {
    _id: 6,
    date: "2024-06-10",
    imageSrc: "/web-statice-img/table-circle-imag.jpg",
    status: false,
    price: 3000,
    actions: "/",
    userName: "Suresh ",
  },
  {
    _id: 7,
    date: "2024-06-10",
    imageSrc: "/web-statice-img/table-circle-imag.jpg",
    status: false,
    price: 3000,
    actions: "/",
    userName: "Suresh ",
  },
  {
    _id: 8,
    date: "2024-06-10",
    imageSrc: "/web-statice-img/table-circle-imag.jpg",
    status: false,
    price: 3000,
    actions: "/",
    userName: "Suresh ",
  },
  {
    _id: 9,
    date: "2024-06-10",
    imageSrc: "/web-statice-img/table-circle-imag.jpg",
    status: false,
    price: 3000,
    actions: "/",
    userName: "Suresh ",
  },
  {
    _id: 10,
    date: "2024-06-10",
    imageSrc: "/web-statice-img/table-circle-imag.jpg",
    status: false,
    price: 3000,
    actions: "/",
    userName: "Suresh ",
  },
  {
    _id: 11,
    date: "2024-06-10",
    imageSrc: "/web-statice-img/table-circle-imag.jpg",
    status: false,
    price: 3000,
    actions: "/",
    userName: "Suresh ",
  },
  {
    _id: 12,
    date: "2024-06-10",
    imageSrc: "/web-statice-img/table-circle-imag.jpg",
    status: false,
    price: 3000,
    actions: "/",
    userName: "Suresh ",
  },
  {
    _id: 13,
    date: "2024-06-10",
    imageSrc: "/web-statice-img/table-circle-imag.jpg",
    status: false,
    price: 3000,
    actions: "/",
    userName: "Suresh ",
  },
  {
    _id: 14,
    date: "2024-06-10",
    imageSrc: "/web-statice-img/table-circle-imag.jpg",
    status: false,
    price: 3000,
    actions: "/",
    userName: "Suresh ",
  },
  {
    _id: 15,
    date: "2024-06-10",
    imageSrc: "/web-statice-img/table-circle-imag.jpg",
    status: false,
    price: 3000,
    actions: "/",
    userName: "Suresh ",
  },
  {
    _id: 16,
    date: "2024-06-10",
    imageSrc: "/web-statice-img/table-circle-imag.jpg",
    status: false,
    price: 3000,
    actions: "/",
    userName: "Suresh ",
  },
  {
    _id: 17,
    date: "2024-06-10",
    imageSrc: "/web-statice-img/table-circle-imag.jpg",
    status: false,
    price: 3000,
    actions: "/",
    userName: "Suresh ",
  },
  {
    _id: 18,
    date: "2024-06-10",
    imageSrc: "/web-statice-img/table-circle-imag.jpg",
    status: false,
    price: 3000,
    actions: "/",
    userName: "Suresh ",
  },
  {
    _id: 19,
    date: "2024-06-10",
    imageSrc: "/web-statice-img/table-circle-imag.jpg",
    status: false,
    price: 3000,
    actions: "/",
    userName: "Suresh ",
  },
  {
    _id: 20,
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
