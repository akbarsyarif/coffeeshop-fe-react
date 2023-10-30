import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  // menggunakan state untuk kontrol nilai localstorage
  const [value, setValue] = useState(() => {
    const val = localStorage.getItem(key);
    // jika nilai dati localstorage ditemukan, maka gunakan nilai tersebut
    if (val !== null) {
      switch (key) {
        case value:
          break;

        default:
          break;
      }
    }
  });
};
