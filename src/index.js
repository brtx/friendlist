import React from 'react';
import ReactDOM from 'react-dom';
// Makes the Redux store available to the connect() calls in the component hierarchy below. 
// Normally, you can’t use connect() without wrapping the root component in <Provider>.
import { Provider } from 'react-redux';

import App from './containers/App';
import configureStore from './store/configureStore';

//import { renderDevTools } from './utils/devTools';

let store = configureStore();

ReactDOM.render(
	<div>
		<Provider store={store}>
			<App />
		</Provider>
		{/*renderDevTools(store)*/}
	</div>, 
	document.getElementById('root'));
