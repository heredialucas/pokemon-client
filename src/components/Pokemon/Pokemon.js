import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {cleanOnePokemon} from '../../redux/actions/actions'

import s from  './Pokemon.module.scss'

export default function Pokemon() {
  const pokemon = useSelector((state) => state.onePokemon);
  const dispatch = useDispatch()

  function onClose(){
    dispatch(cleanOnePokemon([]))
  }

  if (!Array.isArray(pokemon)) {
    return (
      <div className={s.container}>
        <NavLink className={s.card} to={`/detail/${pokemon?.id}`}>
          <div className={s.img}>
            <img src={pokemon?.image} alt={pokemon?.name} />
          </div>
          <div className={s.content}>
            <h2>{pokemon?.name}</h2>
            <ul>
              <p>Tipo :</p>
              {pokemon?.types?.map((type, index) => (
                <li key={index}>{type}</li>
              ))}
            </ul>
          </div>
        </NavLink>
        <button className={s.btn} onClick={onClose}><span>Close</span></button>
      </div>
    );
  }
  return <></>;
}
