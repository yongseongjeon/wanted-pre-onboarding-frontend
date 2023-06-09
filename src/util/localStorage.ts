function getItemFromLocalStorage(key: string) {
  const item = localStorage.getItem(key);
  const hasItem = !!item;
  const isItemTypeString = typeof item === "string";
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
