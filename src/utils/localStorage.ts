function getItemFromLocalStorage(key: string) {
  const item = localStorage.getItem(key);
  const hasItem = !!item;
  const objectRegExp = /^\{[\s\S]*\}$/;
  const arrayRegExp = /^\[[\s\S]*\]$/;
  const isItemTypeObject = !!item?.match(objectRegExp);
  const isItemTypeArray = !!item?.match(arrayRegExp);
  const isItemTypeString = !isItemTypeObject && !isItemTypeArray;
  if (!hasItem || isItemTypeString) {
    return item;
  }
  return JSON.parse(item);
}

function setItemToLocalStorage(key: string, item: string | object | Array<any>) {
  const isItemTypeString = typeof item === "string";
  if (isItemTypeString) {
    return localStorage.setItem(key, item);
  }
  return localStorage.setItem(key, JSON.stringify(item));
}

export { getItemFromLocalStorage, setItemToLocalStorage };
