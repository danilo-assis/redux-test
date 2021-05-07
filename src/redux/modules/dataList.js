const ENDPOINT = "https://pokeapi.co/api/v2/type/16/";

const types = {
  SET_NAMES: "dataList/SET_NAMES",
  ADD_NAME: "dataList/ADD_NAME",
};

const initialState = {
  names: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_NAMES:
      return {
        ...state,
        names: action.names
      };
    case types.ADD_NAME:
      return {
        ...state,
        names: [...state.names, action.name]
      };
    default:
      return state;
  }
};

export const setNames = (names) => ({
  type: types.SET_NAMES,
  names, // Equals to "names: names"
});

export const addName = (name) => ({
  type: types.ADD_NAME,
  name,
});

export const storeNames = (names) => (dispatch) => {
  dispatch(setNames(names));
}

export const insertName = (name) => (dispatch) => {
  dispatch(addName(name));
}

export default reducer;
