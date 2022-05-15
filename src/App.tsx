import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useMachine } from "@xstate/react";
import { promiseMachine } from "./promise.machine";

function App() {
  const [state, send] = useMachine(promiseMachine);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React + XState!</p>
        {state.matches("idle") && <p>Idle</p>}
        {state.matches("pending") && <p>Loading...</p>}
        {state.matches("rejected") && <p>Promise Rejected</p>}
        {state.matches("success") && <p>Promise Resolved</p>}
        {state.matches("failure") && <p>Promise Failed</p>}
        <div>
          {/** You can send events to the running service */}
          <button onClick={() => send("FETCH")}>Fetch</button>
          <button onClick={() => send("FULFILL")}>Resolve</button>
          <button onClick={() => send("REJECT")}>Reject</button>
          {state.matches("failure") && (
            <button onClick={() => send("RETRY")}>Retry</button>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
