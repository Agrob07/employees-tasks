import { TASKS } from "../data/contentTypes";

export const checkType = (source, type) => {
  let longest = source[0];

  if (type === TASKS) {
    let max = null;
    if (source.length) {
      for (let obj of source) {
        if (Object.keys(obj).length > max) {
          max = Object.keys(obj).length;
          longest = obj;
        }
      }
    }
  }
  return longest;
};
