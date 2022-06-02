import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';


// Aquí importamos el reducer creado anteriormente
import rootReducer from './Components/Redux/index';

const store = createStore (
		rootReducer,
		composeWithDevTools()
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* Aquí sólamente encerramos a <App/> */}
      <App />                {/* En el provider */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);