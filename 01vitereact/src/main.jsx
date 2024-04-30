import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import { jsx as _jsx } from "react/jsx-runtime.js";

function MyApp() {
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  );
}
// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

const anotherElement = (
  <a href="http://google.com" target="_blank">
    Visite google
  </a>
);

const anotherUser = "anmol and react";

const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click me to viste google",
  anotherUser,
  anotherElement
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
