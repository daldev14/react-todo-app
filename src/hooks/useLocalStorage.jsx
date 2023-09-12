import { useState, useEffect } from "react";

export default function useLocalStorage(itemName, initialValue = []) {
  const oldData = JSON.parse(window.localStorage.getItem("TODOS_V1")) || [];

  const getItems = () => {
    if (oldData.length !== 0) return oldData;

    return JSON.parse(window.localStorage.getItem(itemName)) || initialValue;
  };

  const [items, setItems] = useState(getItems);

  useEffect(() => {
    window.localStorage.setItem(itemName, JSON.stringify(items));
  }, [itemName, items]);

  return [items, setItems];
}
