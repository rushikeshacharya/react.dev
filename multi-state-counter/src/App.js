// import CounterControls from "./components/CounterControls";
/**
 * Classic Redux import
 */

import { Provider as ReduxProvider } from "react-redux";
// import reduxStore from "./stores/redux/store";
import ReduxCounter from "./stores/redux/ReduxCounter";

import RTKStore from "./stores/rtk/store";
import RTKCounter from "./stores/rtk/RTKCounter";

// Recoil Imports
import { RecoilRoot } from "recoil";
import RecoilCounter from "./stores/recoil/RecoilCounter";

export default function App() {
  return (
    <div className="app">
      <h1>Counter — Redux vs Redux Toolkit vs Recoil</h1>
      {/* <CounterControls></CounterControls> */}
      {
        <div className="grid">
          {/* <ReduxProvider store={reduxStore}> */}
          <div className="card">
            <h2>Classic redux - (deprecated so does not work now)</h2>
            <ReduxCounter />
          </div>
          {/* </ReduxProvider> */}
        </div>
      }
      <div className="grid">
        <ReduxProvider store={RTKStore}>
          <div className="card">
            <h2>RTK</h2>
            <RTKCounter />
          </div>
        </ReduxProvider>
      </div>
      <div className="grid">
        <RecoilRoot>
          <div className="card">
            <h2>Recoil</h2>
            <RecoilCounter />
          </div>
        </RecoilRoot>
      </div>
    </div>
  );
}
