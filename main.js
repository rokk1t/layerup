import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom/client";

function App() {
  return React.createElement('div', {}, 'Layer UP');
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(App));
