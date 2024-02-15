import { UseState } from "./components/useState";
import { UseEffect } from "./components/useEffect";
import { UseMemo } from "./components/useMemo";
import { UseRef } from "./components/useRef";
import { UseContext } from "./components/useContext";
import { UseReducer } from "./components/useReducer";
import { UseCallback } from "./components/useCallback";
import { General } from "./components/general";

function App() {
  return (
    <>
      <General />
      <hr></hr>
      <UseState />
      <hr></hr>
      <UseEffect />
      <hr></hr>
      <UseMemo />
      <hr></hr>
      <UseRef />
      <hr></hr>
      <UseContext />
      <hr></hr>
      <UseReducer />
      <hr></hr>
      <UseCallback />
      <hr></hr>
    </>
  );
}

export default App;
