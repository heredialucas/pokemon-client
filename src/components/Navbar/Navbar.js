import { NavLink } from "react-router-dom";
import Search from "../Search/Search";

import s from './Navbar.module.scss'

export default function Navbar() {
  return (
    <>
      <div className={s.container}>
        <h1>Pokémon</h1>
        <NavLink className={s.navlink} to="/create">Create Pokémon</NavLink>
        <Search />
      </div>
    </>
  );
}
