import ReactDOM from 'react-dom';
import { toto } from 'types';
import { Hello } from './Hello/Hello';
console.log('🤯 ~ file: index.tsx:3 ~ Workspace:', { toto });
const App = () => {
    return <Hello />;
};
ReactDOM.render(<App />, document.getElementById('app'));
