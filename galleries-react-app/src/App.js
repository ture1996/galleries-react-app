import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Page from "./layouts/Page";
import { NavBar } from "./layouts/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Page>
        <Router />
      </Page>
    </BrowserRouter>
  );
}

export default App;
