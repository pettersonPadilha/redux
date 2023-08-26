import { store } from "../store";
import { Provider } from "react-redux";
import Player from "../components/Player";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Player />
    </Provider>
  );
};

export default App;
