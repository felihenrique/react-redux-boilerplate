import productsApi from "../../api/productsApi";
import { Map } from "immutable";

const initialState = Map({
  list: [],
  pageSize: 10,
  page: 1,
  loading: false
});

const Types = {
  SET_PAGE: "products/SET_PAGE",
  INIT_LOADING: "products/INIT_LOADING",
  END_LOADING: "products/END_LOADING",
  CLEAR: "products/CLEAR"
};

function setProductPage(list, page, pageSize) {
  return {
    type: Types.SET_PAGE,
    payload: { list, page, pageSize }
  };
}

function clearProducts() {
  return {
    type: Types.CLEAR
  };
}

function initLoading() {
  return {
    type: Types.INIT_LOADING
  };
}

function endLoading() {
  return {
    type: Types.END_LOADING
  };
}

/**
 * Action - Retorna uma pagina de produtos
 * @param {Number} page
 * @param {Number} pageSize
 */
export function fetchPage(page, pageSize) {
  return async dispatch => {
    dispatch(initLoading());
    dispatch(clearProducts());
    const products = await productsApi.getAll(page, pageSize);
    dispatch(setProductPage(products, page, pageSize));
    dispatch(endLoading());
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_PAGE:
      return state.merge(action.payload);
    case Types.INIT_LOADING:
      return state.merge({ loading: true });
    case Types.END_LOADING:
      return state.merge({ loading: false });
    case Types.CLEAR:
      return state.merge({ list: [] });
    default:
      return state;
  }
}
