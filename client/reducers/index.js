import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import example from './example';

const rootReducer = combineReducers({
  example,
  router: routerReducer
});

export default rootReducer;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import example from './example';

const app = combineReducers({
  example
});

export default app;

>>>>>>> createProject
=======
>>>>>>> resolved merge conflicts
>>>>>>> resolving conflicts
