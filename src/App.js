import { RecoilRoot } from "recoil";

import CharacterCouter from "./components/CharacterCouter/CharacterCouter";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <RecoilRoot>
      {/* <CharacterCouter /> */}
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
