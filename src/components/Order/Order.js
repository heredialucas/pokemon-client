import { useDispatch } from "react-redux";
import { sortPokemons, sortPokemonsAttack } from "../../redux/actions/actions";

import s from "./Order.module.scss";

export default function Order() {
  const dispatch = useDispatch();

  function onSort(e) {
    e.preventDefault();
    dispatch(sortPokemons(e.target.name));
  }
  function onSortAttack(e) {
    e.preventDefault();
    dispatch(sortPokemonsAttack(e.target.name));
  }
  return (
    <>
      <h3>Alphabet:</h3>
      <div className={s.containerBtn}>
        <button onClick={onSort} name="abc">
          A - Z
        </button>
        <button onClick={onSort} name="bca">
          Z - A
        </button>
      </div>
      <h3>Strength:</h3>
      <div className={s.containerBtn}>
        <button onClick={onSortAttack} name="a+">
          Attack +
        </button>
        <button onClick={onSortAttack} name="a-">
          Attack -
        </button>
      </div>
    </>
  );
}
