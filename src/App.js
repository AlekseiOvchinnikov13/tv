import {Provider} from "mobx-react";
import store from "./store/store";
import Container from "./components/Container";
import ChannelCard from "./components/ChannelCard";

function App() {
  return (
    <Provider store={store}>
      <Container>
        <ChannelCard/>
      </Container>
    </Provider>
  );
}

export default App;
