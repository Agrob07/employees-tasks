export const getOnlyTruthyKeys = (obj) => {
  let truthyObj = {};

  const truthyKeys = Object.keys(obj).filter((key) => obj[key]);
  truthyKeys.map((key) => (truthyObj[key] = obj[key]));

  return truthyObj;
};
