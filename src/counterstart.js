import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {increment,decrement,multiply,incrementByAmount,reset,} from "./counter/counterSlice";
export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center w-80">
        <h1 className="text-3xl font-bold text-gray-700 mb-6">Redux Counter</h1>

        <p className="text-5xl font-extrabold text-indigo-600 mb-6">{count}</p>

        <div className="flex flex-wrap gap-3 justify-center">
          <button onClick={() => dispatch(increment())}className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition">
            +1
          </button>
          <button onClick={() => dispatch(decrement())}className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition">
            -1
          </button>
          <button onClick={() => dispatch(multiply())}className="px-4 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition">
            ×2
          </button>
          <button onClick={() => dispatch(incrementByAmount(5))}className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition">
            +5
          </button>
          <button onClick={() => dispatch(reset())}className="px-4 py-2 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition" >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
