const popularityIsGreatherThanTen = (popularity) => parseInt(popularity) > 10;

export const filterByPopularity = (array) => {
  return array.filter((item) => popularityIsGreatherThanTen(item.popularity));
};
