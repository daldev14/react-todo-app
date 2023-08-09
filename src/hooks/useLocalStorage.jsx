import { useState, useEffect } from "react";

export default function useLocalStorage(itemName, initialValue = []) {
  const getItems = () =>
    JSON.parse(window.localStorage.getItem(itemName)) || initialValue;

  const [items, setItems] = useState(getItems);

  useEffect(() => {
    window.localStorage.setItem(itemName, JSON.stringify(items));
  }, [itemName, items]);

  return [items, setItems];
}
