import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


const createApp = () => {
  return require('components/App').default;
};

const doRender = () => {
  ReactDOM.render(
    <AppContainer component={createApp()} />,
    document.getElementById('root')
  );
};

doRender();

if (module.hot) {
  module.hot.accept('components/App', () => doRender());
}
