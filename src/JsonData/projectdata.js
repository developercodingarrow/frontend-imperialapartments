export const blogApiData = {
  _id: "667659286b30f4e5104fdc82",
  title: "imperial service apartment in gurgaon",
  MetaDescreption:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  blogThumblin: "/web-statice-img/table-circle-imag.jpg",
  updatedAt: "2024-06-22T04:55:04.371Z",
  categories: [
    "service apartment",
    "hotel rooms",
    "deluxe rooms",
    "luxury Rooms",
    "Ac Rooms",
  ],
  tags: ["serviceApartment", "rooms", "rent"],
  featured: false,
  author: "sandeep",
};

export const blogInfoForm = [
  {
    id: 1,
    name: "title",
    lable: "Title",
    type: "text",
    placeholder: "Enter Blog Title",
    validation: {
      required: "Blog Title is required.",
    },
  },

  {
    id: 1,
    name: "MetaDescreption",
    lable: "Meta Descreption",
    type: "textarea",
    placeholder: "Meta Descreption",
    validation: {
      required: "Meta Descreption is required.",
    },
  },
];

export const blogTags = [
  {
    id: 2,
    name: "tags",
    lable: "Tags",
    type: "chip",
  },
];

export const blogCategories = [
  {
    id: 2,
    name: "categories",
    lable: "categories",
    type: "checkbox",
  },
];

export const dynimicCategories = [
  {
    categoriName: "service apartment",
    slug: "/service-apartment",
  },
  {
    categoriName: "Hotel Rooms",
    slug: "/service-apartment",
  },
  {
    categoriName: "Ac Rooms",
    slug: "/service-apartment",
  },
];
