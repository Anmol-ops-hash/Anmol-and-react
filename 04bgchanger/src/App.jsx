import { useState } from "react";

function App() {
  const [color, setColor] = useState("grey");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-100 rounded-full px-3 py-2">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 bg-red-600 rounded-full text-white shadow-2xl"
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 bg-green-600 rounded-full text-white shadow-2xl"
          >
            Green
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 bg-yellow-600 rounded-full text-white shadow-2xl"
          >
            yellow
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 bg-orange-600 rounded-full text-white shadow-2xl"
          >
            Orange
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 bg-blue-600 rounded-full text-white shadow-2xl"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("cyan")}
            className="outline-none px-4 bg-cyan-600 rounded-full text-white shadow-2xl"
          >
            Cyan
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 bg-pink-600 rounded-full text-white shadow-2xl"
          >
            Pink
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 bg-purple-600 rounded-full text-white shadow-2xl"
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
