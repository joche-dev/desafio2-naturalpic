import { createContext, useState, useEffect } from 'react';

export const Context = createContext();

export function Provider({ children }) {
  const [fotos, setFotos] = useState([]);
  const baseURL = 'https://api.pexels.com/v1/search?query="trekking"&page=1&per_page=20';
  const API_KEY = 'CDIsblW2M65S2lQlaKXqr8rd6o0sWPDKe2eBJ1nCAvHZXu13SSyTOZ09';

  const getData = async () => {
    const res = await fetch(baseURL, {
      headers: {
        Authorization: API_KEY,
      },
    });
    const data = await res.json();
    const photos = data.photos.map((photos) => {
      return {
        id: photos.id,
        src: photos.src.tiny,
        alt: photos.alt,
        liked: false,
      };
    });

    setFotos(photos);
  };

  useEffect(() => {
    getData();
  }, []);

  const globalState = { fotos, setFotos };

  return <Context.Provider value={globalState}> {children} </Context.Provider>;
}
