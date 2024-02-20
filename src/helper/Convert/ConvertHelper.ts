export const jsonToObject = (json: string) => {
  let s = {};
  try {
    s = JSON.parse(json) || {};
    return s instanceof Object ? s : {};
  } catch (error) {
    return {};
  }
};

export const objectToJson = (obj: object) => {
  var s = "{}";
  if (!(obj instanceof Object)) return s;
  try {
    s = JSON.stringify(obj);
    return s[0] === "{" ? s : "{}";
  } catch (e) {
    return "{}";
  }
};

export const jsonToArray = (json: string) => {
  let s = [];
  try {
    s = JSON.parse(json) || [];
    return s instanceof Array ? s : [];
  } catch (error) {
    return [];
  }
};

export const arrayToJson = (array: object) => {
  var s = "[]";
  if (!(array instanceof Array)) return s;
  try {
    s = JSON.stringify(array);
    return s[0] === "[" ? s : "[]";
  } catch (e) {
    return "[]";
  }
};
