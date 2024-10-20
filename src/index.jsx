import App from './App';

const container = document.getElementById('root');

async function loadReact() {
  if (import.meta.env.REACT_APP_REACT_18 === 'true') {
    const React = await import('react-18');
    const ReactDOM = await import('react-dom-18/client');
    const root = ReactDOM.createRoot(container);
    root.render(<App />);
  } else {
    const React = await import('react');
    const ReactDOM = await import('react-dom');
    ReactDOM.render(<App />, container);
  }
}

loadReact();
