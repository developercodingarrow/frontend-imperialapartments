export const sortByDate = (data, sortOrder) => {
  const sortedData = data.slice().sort((a, b) => {
    if (sortOrder === true) {
      return new Date(a.updatedAt) - new Date(b.updatedAt);
    } else {
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    }
  });

  return sortedData;
};

export const sortByPrice = (data, sortOrder) => {
  // Sorting logic by price
  const sortedData = [...data].sort((a, b) => {
    const priceA = parseFloat(a.price);
    const priceB = parseFloat(b.price);

    if (sortOrder === true) {
      return priceA - priceB;
    } else {
      return priceB - priceA;
    }
  });

  return sortedData;
};
