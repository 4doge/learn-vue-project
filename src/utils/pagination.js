const range = (start, end) => Array.from({ length: end - start + 1 }, (x, i) => i + start);

export default function pagination(pageNumber, pageCount) {
  let pages = [];
  if (pageCount > 10) {
    if (pageNumber <= 4) {
      pages = range(1, 7);
      pages.push('...');
      pages.push(pageCount);
    } else if (pageNumber >= pageCount - 4) {
      pages.push(1);
      pages.push('...');
      pages.push(...range(pageCount - 5, pageCount));
    } else {
      pages.push(1);
      pages.push('...');
      pages.push(...range(pageNumber - 2, pageNumber + 1));
      pages.push('...');
      pages.push(pageCount);
    }
  } else {
    pages = range(1, pageCount);
  }
  return pages;
}
