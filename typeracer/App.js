import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Typeracer from "./src/Typeracer";

export default function App() {
  return (
    <Provider store={store}>
      <Typeracer />
      <StatusBar style="auto" />
    </Provider>
  );
}
