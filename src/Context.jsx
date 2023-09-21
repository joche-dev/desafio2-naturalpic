import { createContext, useState, useEffect } from 'react';

export const Context = createContext();

export function Provider({ children }) {
  const [fotos, setFotos] = useState([]);
  const URL = "/desafio2-naturalpic/fotos.json"

  const getData = async () => {
    const res = await fetch(URL);
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
