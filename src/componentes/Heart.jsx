import { useContext } from 'react';
import { Context } from '../Context';

export default function Heart({ color, id }) {
  const { fotos, setFotos } = useContext(Context);

  function handleClick(id) {
    const newFotos = [...fotos];
    const fotoFavorita = newFotos.find((foto) => foto.id === id);

    fotoFavorita.liked = fotoFavorita.liked ? false : true;
    setFotos(newFotos);

  }

  return (
    <span className="heart" onClick={() => handleClick(id)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill={color}
        className="bi bi-heart-fill"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
      </svg>
    </span>
  );
}
