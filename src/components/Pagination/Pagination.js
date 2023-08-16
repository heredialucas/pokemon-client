import Cards from "../Cards/Cards";

import { useState } from "react";
import { useSelector } from "react-redux";

// import s from "./Pagination.module.scss";

export default function Pagination() {
  const allPokemons = useSelector((state) => state.pokemons);

  const [page, setPage] = useState(1);
  const [pokemonForPage] = useState(12);
  const indexLast = page * pokemonForPage;
  const indexFirst = indexLast - pokemonForPage;

  const pokemons = allPokemons.slice(indexFirst, indexLast);

  return <Cards pokemons={pokemons} setPage={setPage} pokemonForPage={pokemonForPage}/>;
}

// export default function Pagination() {
//   const [page, setPage] = useState(0);
//   const pokemons = useSelector((state) => state.pokemons);

//   const page0 = pokemons && pokemons?.slice(0, 12);
//   const page1 = pokemons && pokemons?.slice(12, 24);
//   const page2 = pokemons && pokemons?.slice(24, 36);
//   const page3 = pokemons && pokemons?.slice(36);

//   function onPageNext(e) {
//     e.preventDefault();
//     if (page < 3) {
//       setPage(page + 1);
//     }else{
//       alert('Page not found')
//     }
//   }

//   function onPagePrevious(e) {
//     e.preventDefault();
//     if (page > 0) {
//       setPage(page - 1);
//     }else{
//       alert('Page not found')
//     }
//   }

//   if (page === 0 && page0.length > 0) {
//     return (
//       <div className={s.container}>
//         <div className={s.containerBtn}>
//           <button onClick={onPagePrevious}>Previous</button>
//           <button onClick={onPageNext}>Next</button>
//         </div>
//         {pokemons.length > 0 && <Cards page={page0} />}
//         <div className={s.containerBtn}>
//           <button onClick={onPagePrevious}>Previous</button>
//           <button onClick={onPageNext}>Next</button>
//         </div>
//       </div>
//     );
//   } else if (page === 1 && page1.length > 0) {
//     return (
//       <div className={s.container}>
//         <div className={s.containerBtn}>
//           <button onClick={onPagePrevious}>Previous</button>
//           <button onClick={onPageNext}>Next</button>
//         </div>
//         {pokemons.length > 0 && <Cards page={page1} />}
//         <div className={s.containerBtn}>
//           <button onClick={onPagePrevious}>Previous</button>
//           <button onClick={onPageNext}>Next</button>
//         </div>
//       </div>
//     );
//   } else if (page === 2 && page2.length > 0) {
//     return (
//       <div className={s.container}>
//         <div className={s.containerBtn}>
//           <button onClick={onPagePrevious}>Previous</button>
//           <button onClick={onPageNext}>Next</button>
//         </div>
//         {pokemons.length > 0 && <Cards page={page2} />}
//         <div className={s.containerBtn}>
//           <button onClick={onPagePrevious}>Previous</button>
//           <button onClick={onPageNext}>Next</button>
//         </div>
//       </div>
//     );
//   } else if (page === 3 && page3.length > 0) {
//     return (
//       <div className={s.container}>
//         <div className={s.containerBtn}>
//           <button onClick={onPagePrevious}>Previous</button>
//           <button onClick={onPageNext}>Next</button>
//         </div>
//         {pokemons.length > 0 && <Cards page={page3} />}
//         <div className={s.containerBtn}>
//           <button onClick={onPagePrevious}>Previous</button>
//           <button onClick={onPageNext}>Next</button>
//         </div>
//       </div>
//     );
//   } else return <></>
// }
