import "./Cards.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Cards({ pokemons, setPage, pokemonForPage }) {
  const pokemonsLength = useSelector((state) => state.pokemons.length);
  let pagesNumber = [];

  function onPage(value) {
    setPage(value);
  }

  for (let i = 1; i <= Math.ceil(pokemonsLength / pokemonForPage); i++) {
    pagesNumber.push(i);
  }

  return (
    <>
      <div className="container">
        <div className="containerBtn">
          {pagesNumber.map((n, index) => {
            return (
              <div onClick={() => onPage(n)} className="btn" key={index}>
                <button className="button" onClick={() => onPage(n)}>{n}</button>
              </div>
            );
          })}
        </div>
        <div className="containerPokemons">
          {pokemons?.map((pokemon, index) => {
            return (
              <NavLink
                key={index}
                className="card"
                to={`/detail/${pokemon?.id}`}
              >
                <div className="img">
                  <img src={pokemon?.image} alt={pokemon?.name} />
                </div>
                <div className="content">
                  <h2>{pokemon?.name}</h2>
                  <ul className="types">
                    <p>Tipo:</p>
                    {pokemon?.types?.map((type, index) => {
                      return <li key={index}>{type}</li>;
                    })}
                  </ul>
                </div>
              </NavLink>
            );
          })}
        </div>
        <div className="containerBtn">
          {pagesNumber.map((n, index) => {
            return (
              <div className="btn" key={index}>
                <button className="button" onClick={() => onPage(n)}>{n}</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
