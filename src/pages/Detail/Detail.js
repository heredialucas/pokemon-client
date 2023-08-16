import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetail } from "../../redux/actions/actions";
import { NavLink } from "react-router-dom";

import s from "./Detail.module.scss";

export default function Detail() {


  const pokemonId = useParams();
  const dispatch = useDispatch();
  const pokemonDetail = useSelector((state) => state.pokemonDetail);



  useEffect(() => {
    dispatch(getPokemonDetail(pokemonId.id));
  }, [dispatch, pokemonId]);

  return (
    <div className={s.container}>
      <div className={s.containerDetail}>
        {pokemonDetail?.map((pokemon, index) => {
          return (
            <div className={s.containerCard} key={index}>
              <div className={s.header}>
                <h3>{pokemon.name}</h3>
                <img src={pokemon.image} alt={pokemon.name} />
              </div>
              <div className={s.content}>
                <div>
                  <p>Attack: {pokemon.attack}</p>
                  <p>Defense: {pokemon.defense}</p>
                  <p>Height: {pokemon.height}</p>
                </div>
                <div>
                  <p>Hp: {pokemon.hp}</p>
                  <p>Speed: {pokemon.speed}</p>
                  <p>Weight: {pokemon.weight}</p>
                </div>
              </div>
              <p className={s.types}>Tipos:</p>
              <ul>
                {pokemon.types?.map((type, index) => {
                  return <li key={index}>{type}</li>;
                })}
              </ul>
              <NavLink className={s.btn} to="/home">Volver</NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}
