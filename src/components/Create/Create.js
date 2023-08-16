import s from "./Create.module.scss";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postPokemon, updatePokemons } from "../../redux/actions/actions";
import { NavLink, useNavigate } from "react-router-dom";
import { getTypes, getPokemons } from "../../redux/actions/actions";

export default function Create() {
  const redir = useNavigate();
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const [error, setError] = useState({});
  const [type, setType] = useState({});
  const [data, setData] = useState({
    name: "",
    attack: "",
    defense: "",
    hp: "",
    speed: "",
    height: "",
    weight: "",
    image: "",
    types: [],
  });

  function validate(data) {
    let error = {};
    
    if (!data.name) {
      error.name = "Name is required";
    } else if (!/[a-zA-Z]+/.test(data.name)) {
      error.name = "Name is invalid";
    }
    if (!data.attack) {
      error.attack = "Attack is required";
    } else if (!/[01]?[0-9][0-9]?/.test(data.defense)) {
      error.attack = "Attack is invalid";
    }
    if (!data.defense) {
      error.defense = "Defense is required";
    } else if (!/[01]?[0-9][0-9]?/.test(data.defense)) {
      error.defense = "Defense is invalid";
    }
    if (!data.hp) {
      error.hp = "Hp is required";
    } else if (!/[01]?[0-9][0-9]?/.test(data.hp)) {
      error.hp = "Hp is invalid";
    }
    if (!data.speed) {
      error.speed = "Speed is required";
    } else if (!/[01]?[0-9][0-9]?/.test(data.speed)) {
      error.speed = "Speed is invalid";
    }
    if (!data.height) {
      error.height = "Height is required";
    } else if (!/[01]?[0-9][0-9]?/.test(data.height)) {
      error.height = "Height is invalid";
    }
    if (!data.weight) {
      error.weight = "Weight is required";
    } else if (!/[01]?[0-9][0-9]?/.test(data.weight)) {
      error.weight = "Weight is invalid";
    }
    if (!data.image) {
      error.image = "Url is required";
    } else if (
      !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
        data.image
      )
    ) {
      error.image = "Url is invalid";
    }
    return error;
  }

  useEffect(() => {
    setError(validate(data));
  }, [data]);

  useEffect(() => {
    var arr = [];
    for (const key in type) {
      arr.push(key);
    }
    setData({
      ...data,
      types: arr,
    });
  }, [type]);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  function onSubmit(e) {
    e.preventDefault();
    dispatch(postPokemon(data));
    dispatch(updatePokemons(data));
    dispatch(getPokemons());
    redir("/home");
  }

  function onClickType(e) {
    if (data.types.length < 2) {
      e.preventDefault();
      e.target.setAttribute("disabled", true);
      e.target.style.backgroundColor = "#000";
      e.target.style.opacity = ".5";
      setType({
        ...type,
        [e.target.name]: e.target.value,
      });
    }
  }

  function onHandle(e) {
    const value = e.target.value.trim();
    setData({
      ...data,
      [e.target.name]: value,
    });
  }

  function onReset(e) {
    e.preventDefault()
    const aux = document.querySelectorAll('.input')
    aux.forEach(e=>{
      e.removeAttribute("disabled")
      e.style.backgroundColor = "transparent";
      e.style.opacity = "1";
    })

    setData({
      name: "",
      attack: "",
      defense: "",
      hp: "",
      speed: "",
      height: "",
      weight: "",
      image: "",
      types: [],
    });
    setType({});
  }

  return (
    <div className={s.container}>
      <div className={s.containerForm}>
        <form onSubmit={onSubmit} method="POST" className={s.form}>
          <div className={s.containerInput}>
            <div className={s.containerInputLeft}>
              <label>Name:</label>
              <input
                value={data.name}
                onChange={onHandle}
                type="text"
                name="name"
                required="required"
              />{" "}
              {error.name && <p className={s.danger}>{error.name}</p>}
              <label>Attack:</label>
              <input
                value={data.attack}
                onChange={onHandle}
                type="number"
                min="0"
                max="200"
                name="attack"
                required="required"
              />
              {error.attack && <p className={s.danger}>{error.attack}</p>}
              <label>Defense:</label>
              <input
                value={data.defense}
                onChange={onHandle}
                type="number"
                name="defense"
                min="0"
                max="200"
                required="required"
              />
              {error.defense && <p className={s.danger}>{error.defense}</p>}
              <label>Hp:</label>
              <input
                value={data.hp}
                onChange={onHandle}
                type="number"
                min="0"
                max="200"
                name="hp"
                required="required"
              />
              {error.hp && <p className={s.danger}>{error.hp}</p>}
            </div>
            <div className={s.containerInputRight}>
              <label>Speed:</label>
              <input
                value={data.speed}
                onChange={onHandle}
                type="number"
                min="0"
                max="200"
                name="speed"
                required="required"
              />
              {error.speed && <p className={s.danger}>{error.speed}</p>}
              <label>Height:</label>
              <input
                value={data.height}
                onChange={onHandle}
                type="number"
                min="0"
                max="200"
                name="height"
                required="required"
              />
              {error.height && <p className={s.danger}>{error.height}</p>}
              <label>Weight:</label>
              <input
                value={data.weight}
                onChange={onHandle}
                type="number"
                min="0"
                max="200"
                name="weight"
                required="required"
              />
              {error.weight && <p className={s.danger}>{error.weight}</p>}
              <label>Image:</label>
              <input
                value={data.image}
                onChange={onHandle}
                type="url"
                name="image"
                alt="image"
                required="required"
              />
              {error.image && <p className={s.danger}>{error.image}</p>}
            </div>
          </div>

          <div className={s.containerBtn}>
            <label>Types:</label>
            {types[0]?.map((type, index) => {
              return (
                <input
                  className='input'
                  type="button"
                  key={index}
                  onClick={onClickType}
                  name={type}
                  value={type}
                />
              );
            })}
          </div>
          <div className={s.containerBtnDown}>
            <NavLink className={s.navlink} to="/home">
              Return
            </NavLink>
            <input onClick={onReset} type="reset" value="Refresh" />
            <input type="submit" value="Create" />
          </div>
        </form>
      </div>
    </div>
  );
}
