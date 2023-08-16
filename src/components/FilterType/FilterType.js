import { useEffect } from "react";
import { getTypes, filterTypePokemons } from "../../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";

import Logo from '../../assets/image/logo.png'

import s from "./FilterType.module.scss";

import Order from "../../components/Order/Order";

export default function FilterType() {
  const types = useSelector((state) => state.types);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  function onFilterType(e) {
    e.preventDefault();
    dispatch(filterTypePokemons(e.target.name));
  }

  return (
    <>
      <div className={s.container}>
        <img src={Logo} alt='LogoLucas' />
        <hr/>
        <Order />
        <h3>Type:</h3>
        <div className={s.containerBtn}>
          {types &&
            types[0]?.map((type, index) => {
              return (
                <button
                  key={index}
                  onClick={onFilterType}
                  name={type}
                  value={type}
                >
                  {type}
                </button>
              );
            })}
          <button className={s.btnAll} onClick={onFilterType} name="created" value="created">
            Created
          </button>
          <button className={s.btnAll} onClick={onFilterType} name="all" value="all">
            All
          </button>
        </div>
      </div>
    </>
  );
}
