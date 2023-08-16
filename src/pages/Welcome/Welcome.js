import s from "./Welcome.module.scss";
import Wel from '../../assets/image/welcome.jpg'
import { NavLink } from "react-router-dom";
import Title from "../../assets/image/pokemon.png";

export default function Welcome() {
 
  return (
    <>
      <div className={s.container}>
        <img className={s.wel} src={Wel} alt="welcome" />
        <img className={s.title} src={Title} alt="title" />
        <div className={s.btn}>
          <span data-testid='span'>o</span>
        </div>
        <NavLink className={s.navlink} to='/home'>Home</NavLink>
      </div>
    </>
  );
}
