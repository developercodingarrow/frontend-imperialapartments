export const blogApiData = {
  _id: "667659286b30f4e5104fdc82",
  title: "imperial service apartment in",
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
    name: "blogTitle",
    lable: "Title",
    type: "text",
    placeholder: "Enter Blog Title....",
    validation: {
      required: "Blog Title is required.",
    },
  },

  {
    id: 1,
    name: "metaDescription",
    lable: "Meta Descreption",
    type: "textarea",
    placeholder: "Meta Descreption",
    validation: {
      required: "Meta Descreption is required.",
    },
  },
];

export const staticSelector = [
  {
    id: 1,
    name: "postType",
    label: "@ Articel Type",
    type: "static_selector",
    options: ["NewsArticle", "BlogPosting", "Article"],
    slectedValue: "BlogPosting",
    validation: {
      required: "Meta Descreption is required.",
    },
  },
];

export const blogTags = [
  {
    id: 2,
    name: "blogTags",
    lable: "blogTags",
    type: "chip",
  },
];

export const blogCategories = [
  {
    id: 2,
    name: "blogCategories",
    lable: "categories",
    type: "checkbox",
    valueKey: "categoryName",
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

export const dynimicTag = [
  {
    TagName: "service apartment",
    slug: "/service-apartment",
  },
  {
    TagName: "hotel rooms",
    slug: "/service-apartment",
  },
  {
    TagName: "Deluxe rooms",
    slug: "/service-apartment",
  },
];

export const createCategoriesForm = [
  {
    id: 1,
    name: "categoryName",
    lable: "Create Categorie",
    type: "text",
    placeholder: "Enter new Categorie Name",
    validation: {
      required: "Categories Name is Required",
    },
  },
];

export const UpdateCategoriesForm = [
  {
    id: 1,
    name: "categoryName",
    lable: "Create Categorie",
    type: "text",
    placeholder: "Update categorie",
    validation: {
      required: "Categories Name is Required",
    },
  },
];

export const imageUplaodInputs = [
  {
    id: 1,
    name: "altText",
    lable: "Alt Text",
    type: "text",
    placeholder: "Enter the image alt text",
    validation: {
      required: "Alt Text Name is Required",
    },
  },
  {
    id: 2,
    name: "imageDescreption",
    lable: "image Descreption",
    type: "text",
    placeholder: "Enter the image descreption",
    validation: {
      required: "descreption  is Required",
    },
  },
  {
    id: 3,
    name: "caption",
    lable: "image Caption",
    type: "text",
    placeholder: "Enter the image Caption",
    validation: {
      required: "Caption  is Required",
    },
  },
  {
    id: 3,
    name: "ImageTitle",
    lable: "Image Title",
    type: "text",
    placeholder: "Enter the image Title",
    validation: {
      required: "Title is Required",
    },
  },
];

export const imageApiData = {
  _id: "667659286b30f4e5104fdc82",
  altText: "service apartment",
  imageDescreption: "this is image descreption",
  caption: "this is image caption",
  ImageTitle: "This is image title",
};

export const inputConfig = [
  {
    type: "text",
    name: "altText",
    placeholder: "Write alt text",
    label: "Alt Text",
  },
  {
    type: "text",
    name: "alternativeText",
    placeholder: "Write image alternative Text",
    label: "alternative Text",
  },
  {
    type: "text",
    name: "title",
    placeholder: "Write image title",
    label: "title",
  },
  {
    type: "text",
    name: "caption",
    placeholder: "Write image caption",
    label: "caption",
  },
  {
    type: "text",
    name: "description",
    placeholder: "Write image description",
    label: "description",
  },
];

export const postTypeOption = ["NewsArticle", "BlogPosting", "Article"];
