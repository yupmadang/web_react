import { combineReducers } from 'redux';
import redux from './redux';

const store_redux = combineReducers({
    redux,
});

export default store_redux;

//스토어의 경우 하나의 리듀서만을 연결할 수 있다. 그러나 combineReducer를 사용하면 여러 리듀서를 하나로 통합해서 사용이 가능하다