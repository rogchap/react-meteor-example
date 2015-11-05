Utils = {
  merge(...objects) {
    return Object.assign({}, ...objects);
  },
  pluralise(length, text) {
    if (length === 1) {
      return text;
    }
    return text + 's';
  },
};
