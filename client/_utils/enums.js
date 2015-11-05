function makeEnum(enumObject) {
  let keys = [];
  let values = [];
  for (let key in enumObject) {
    if (!!key) {
      keys.push(key);
      values.push(enumObject[key]);
    }
  }
  enumObject.keys = keys;
  enumObject.values = values;
}

ViewType = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETE: 'complete',
};
makeEnum(ViewType);
