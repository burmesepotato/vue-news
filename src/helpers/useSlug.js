const getSlug = (title) => {
  /**
   * 1. to lowercase
   * 2. replaces whitespace with -
   * 3. removes quotes
   */
  if (title.length) { return title.toLowerCase().replace(/[^\w\s]/ig, '').replace(/\s/ig, '-'); }
  return false;
};

export default getSlug;
