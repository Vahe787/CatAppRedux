import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatsFetch } from "../libs/features/catState";
import "../App.css";

export default function CatApp() {
  const cats = useSelector((state) => state.cats.cats);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);
  return (
    <div className="App">
      <h1>Cats Gallery</h1>
      <hr />
      <div className="Gallery">
        {cats.map((cat) => (
          <div key={cat.id} className="row">
            <div className="column column-left">
              <img
                alt={cat.name}
                src={cat.image.url}
                width="400"
                height="400"
              />
            </div>
            <div className="column column-right">
              <h2>{cat.name}</h2>
              <h5>Temperament: {cat.temperament}</h5>
              <p className="text">{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
