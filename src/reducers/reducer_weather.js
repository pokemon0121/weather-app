import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  //console.log('Action recieved.', action);
  switch (action.type) {
    case FETCH_WEATHER:
      // same as : state.concat([ action.payload.data ]);
      // es6 syntax, concat
        return [ action.payload.data, ...state ];
  }
  return state;
}
