import Navbar from "../../components/Navbar/Navbar";
import Pagination from "../../components/Pagination/Pagination";
import Pokemon from "../../components/Pokemon/Pokemon";
import FilterType from "../../components/FilterType/FilterType";
import Filtered from "../../components/Filtered/Filtered";
import Loading from "../../components/Loading/Loading";

import "./Home.scss";

import { getPokemons } from "../../redux/actions/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.onePokemon);
  const pokemons = useSelector((state) => state.pokemons);
  const pokemonsType = useSelector((state) => state.pokemonsType);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(getPokemons());
    }
  }, [dispatch, pokemons]);

  return (
    <>
      <Navbar />
      {pokemon && !loading && <Pokemon />}
      {loading && <Loading />}
      <FilterType />
      {pokemonsType.length > 0 ? <Filtered /> : <Pagination />}
      {pokemons.length === 0 && <Loading />}
    </>
  );
}
