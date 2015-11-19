import { createStore, combineReducers } from 'redux';

import * as reducers from '../reducers/friends';

//import { createStore } from '../utils/devTools';
   
export default function(){
	// The combineReducers helper function turns an object whose values are different 
	// reducing functions into a single reducing function you can pass to createStore.
	
    // The resulting reducer calls every child reducer, and gather their results into
	//  a single state object. The shape of the state object matches the keys of the passed reducers.
	const reducer = combineReducers(reducers);
	
	// Creates a Redux store that holds the complete state tree of your app.
	// Each reducer's name is a key on the unified state object 
	return createStore(reducer);
}

