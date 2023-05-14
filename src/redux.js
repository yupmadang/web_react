import { createAction, handleActions } from 'redux-actions';

//action정의
const SET_VALUE = 'redux/SET_VALUE';
const REMOVE_VALUE = 'redux/REMOVE_VALUE';

// action object 생성
export const setText = createAction(SET_VALUE, value => value);
export const removeText = createAction(REMOVE_VALUE, value => value);

// initial state   
const initialState = {
    value: '초기화된 값'
  };

// reducer 정의
const redux = handleActions({
    [SET_VALUE]: (state, {payload : value}) => {
        return {
            ...state,
            value,
        };
    },
    [REMOVE_VALUE]: (state, {payload : value}) => {
        return {
            ...state,
            value,
        };
    },
},
initialState
);

    
export default redux;