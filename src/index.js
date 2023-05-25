import ReactDOM from 'react-dom/client';
import { configureStore } from './store2/index'
import { Root } from './Root';

// import App from './App';
// import { Provider } from 'react-redux'

const store = configureStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Root store={store}/>
);
