export const getLocalStorage = (key: string) => {
  const itemStr = localStorage.getItem(String(key));

  // if the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();
  if (now.getTime() < item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key);
    return null;
  }
  return item.data;
};

export const setLocalStorage = (key: string, value: any, ttl?: string) => {
  // `item` is an object which contains the original value
  const item = {
    data: value,
    expiry: ttl || null,
  };
  localStorage.setItem(String(key), JSON.stringify(item));
};
