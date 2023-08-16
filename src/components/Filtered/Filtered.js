import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import './Filtered.scss'

export default function Cards() {
  const pokemons = useSelector((state) => state.pokemonsType);
  return (
    <>
      <div className="containerFiltered">
        {pokemons?.map((pokemon, index) => {
          return (
            <NavLink key={index} className="card" to={`/detail/${pokemon.id}`}>
              <div className="img">
                <img src={pokemon.image} alt={pokemon.name} />
              </div>
              <div className="content">
                <h2>{pokemon.name}</h2>
                <ul className="types">
                  <p>Tipo :</p>
                  {pokemon.types?.map((type, index) => {
                    return <li key={index}>{type}</li>;
                  })}
                </ul>
              </div>
            </NavLink>
          );
        })}
      </div>
    </>
  );
}
