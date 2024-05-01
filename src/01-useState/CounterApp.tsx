import { useState } from "react";

export const CounterApp = () => {
  const [counters, setCounters] = useState({
    c1: 10,
    c2: 20,
    c3: 30,
  });

  return (
    <>
      <h1>Counter1: {counters.c1}</h1>
      <h1>Counter2: {counters.c2}</h1>
      <h1>Counter3: {counters.c3}</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() =>
          setCounters({
            ...counters,
            c1: counters.c1 + 1,
          })
        }
      >
        +1
      </button>
      <button
        className="btn btn-primary"
        onClick={() =>
          setCounters({
            ...counters,
            c2: counters.c2 + 1,
          })
        }
      >
        +1
      </button>
      <button
        className="btn btn-primary"
        onClick={() =>
          setCounters({
            ...counters,
            c3: counters.c3 + 1,
          })
        }
      >
        +1
      </button>
    </>
  );
};
