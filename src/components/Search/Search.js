import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName, setLoading } from "../../redux/actions/actions";

import s from './Search.module.scss'

export default function Search() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    if(name === '') return alert('You must enter a Pokémon')
    dispatch(getPokemonByName(name));
    dispatch(setLoading(true))
    setName('')
  }

  function onHandle(e) {
    setName(e.target.value);
  }

  return (
    <>
      <form className={s.container}>
        <input type="text" placeholder="Pokémon" onChange={onHandle} value={name} name="search" />
        <button onClick={onSubmit}>Search</button>
      </form>
    </>
  );
}
