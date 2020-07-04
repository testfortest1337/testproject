const json = require('../assets/data.json');

export const getList = (isNew = false) => {
  return json.filter((item) => item.new === isNew);
};
