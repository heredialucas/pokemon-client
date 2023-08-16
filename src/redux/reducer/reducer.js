import { GET_POKEMONS } from "../actions/actions";
import { SET_LOADING } from "../actions/actions";
import { CLEAN_ONE_POKEMON } from "../actions/actions";
import { UPDATE_POKEMONS } from "../actions/actions";
import { SORT_POKEMONS } from "../actions/actions";
import { SORT_POKEMONS_ATTACK } from "../actions/actions";
import { GET_POKEMON_BY_NAME } from "../actions/actions";
import { FILTER_TYPE_POKEMONS } from "../actions/actions";
import { GET_TYPES } from "../actions/actions";
import { POST_POKEMON } from "../actions/actions";
import { GET_POKEMONDETAIL } from "../actions/actions";

const initialState = {
  pokemons: [],
  pokemonsType: [],
  onePokemon: [],
  pokemonDetail: [],
  types: [],
  loading: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload.data,
      };
    case CLEAN_ONE_POKEMON:
      return {
        ...state,
        onePokemon: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_POKEMONS:
      action.payload.image =
        "https://cdn.pixabay.com/photo/2016/08/15/00/50/pokeball-1594373_960_720.png";
      alert("Pokémon successfully created");
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload],
      };
    case SORT_POKEMONS:
      const pokemonsSort =
        action.payload === "abc"
          ? [...state.pokemons].sort((a, b) => {
              return a.name > b.name ? 1 : -1;
            })
          : [...state.pokemons].sort((a, b) => {
              return a.name > b.name ? -1 : 1;
            });
      const pokemonsTypeSort =
        action.payload === "abc"
          ? [...state.pokemonsType].sort((a, b) => {
              return a.name > b.name ? 1 : -1;
            })
          : [...state.pokemonsType].sort((a, b) => {
              return a.name > b.name ? -1 : 1;
            });
      return {
        ...state,
        pokemons: pokemonsSort,
        pokemonsType: pokemonsTypeSort,
      };

    case SORT_POKEMONS_ATTACK:
      const pokemonsAttack =
        action.payload === "a+"
          ? [...state.pokemons].sort((a, b) => {
              return a.attack > b.attack ? -1 : 1;
            })
          : [...state.pokemons].sort((a, b) => {
              return a.attack > b.attack ? 1 : -1;
            });
      const pokemonsAttackSort =
        action.payload === "a+"
          ? [...state.pokemonsType].sort((a, b) => {
              return a.attack > b.attack ? -1 : 1;
            })
          : [...state.pokemonsType].sort((a, b) => {
              return a.attack > b.attack ? 1 : -1;
            });
      return {
        ...state,
        pokemons: pokemonsAttack,
        pokemonsType: pokemonsAttackSort,
      };

    case GET_POKEMON_BY_NAME:
      if (action.payload.data === "Error") {
        alert("Pokémon not found");
        return { ...state, loading: false, onePokemon: [] };
      }
      return {
        ...state,
        loading: false,
        onePokemon: action.payload.data,
      };
    case FILTER_TYPE_POKEMONS:
      if(state.pokemons.length === 0) {
        alert('Type not found')
        return{...state}
      } 
      if (action.payload === "all") {
        return {
          ...state,
          pokemonsType: [],
        };
      }
      const created = state.pokemons.filter(p=> p.id.length > 8)
      if(created.length === 0 && action.payload === "created"){
          alert('Created not found')
        return{...state}
      }
      if (action.payload === "created") {
        return {
          ...state,
          pokemonsType: created,
        };
      }
      const pokemonsType = state.pokemons.filter((p) =>
        p.types.includes(action.payload)
      );
      if (pokemonsType.length === 0) {
        alert("Type Not Found");
        return { ...state };
      } else {
        return {
          ...state,
          pokemonsType: pokemonsType,
        };
      }
    case GET_TYPES:
      return {
        ...state,
        types: [...state.types, action.payload.data],
      };
    case POST_POKEMON:
      return {
        ...state,
      };
    case GET_POKEMONDETAIL:
      if (action.payload.data.id.length > 10) {
        const types = action.payload.data.types.map((e) => {
          return e.name;
        });
        action.payload.data.types = types;
      }
      return {
        ...state,
        pokemonDetail: [action.payload.data],
      };
    default:
      return state;
  }
}

export default rootReducer;
