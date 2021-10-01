import { GET_COUNTRIES, GET_BY_NAME, ORDER_BY_ALPHABET, ORDER_BY_AREA, GET_BY_CONTINENT, GET_BY_ID} from "./actions";

const initialState = {
  countries: [],
  countriesMain: [],
  details: []

  } ;

function rootReducer (state = initialState, action) {
  switch(action.type) {
    case GET_COUNTRIES: 
    return {
        ...state,
        countries: action.payload,
        countriesMain: action.payload
    }  
    case GET_BY_NAME:
      return {
        ...state,
        countries: action.payload
      }
      case ORDER_BY_ALPHABET:
        const countryOrder = action.payload === 'Asc' ?
        state.countriesMain.sort(function(a, b) {
            if(a.name > b.name) {
                return 1;
            }
            if(b.name > a.name) {
                return -1;
            }
            return 0;
        }) :
        state.countriesMain.sort(function(a, b) {
            if(a.name > b.name) {
                return -1;
            }
            if(b.name > a.name) {
                return 1;
            }
            return 0;
        });
        return {
            ...state,
            countries: countryOrder
        }
        case ORDER_BY_AREA:
        const areaOrder = action.payload === 'bArea' ?
        state.countriesMain.sort(function(a, b) {
            if(a.area > b.area) {
                return 1;
            }
            if(b.area > a.area) {
                return -1;
            }
            return 0;
        }) :
        state.countriesMain.sort(function(a, b) {
            if(a.area > b.area) {
                return -1;
            }
            if(b.area > a.area) {
                return 1;
            }
            return 0;
        });
        return {
            ...state,
            countries: areaOrder
        }
        case GET_BY_CONTINENT:
        const continent = state.countriesMain.filter(c => c.continent === action.payload);
        return {
           ...state,
           countries: continent
        }
        case GET_BY_ID:
          console.log("reducer id", action.payload)
          return {
            ...state,
            details: action.payload
          }
    default:
    return state;   
  }
}

export default rootReducer;