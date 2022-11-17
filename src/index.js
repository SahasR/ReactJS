import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import TodoContainer from './components/TodoContainer';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <TodoContainer />
        </Provider>
    </React.StrictMode>
)