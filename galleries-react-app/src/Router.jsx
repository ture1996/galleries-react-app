import { Switch, Route } from "react-router-dom";
import { CreateGallery } from "./pages/CreateGalleryApp";
import { Galleries } from "./pages/GalleriesApp";
import { Gallery } from "./pages/GalleryApp";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Galleries />
      </Route>
      <Route path="/galleries/:id">
        <Gallery />
      </Route>
      <Route path="/create">
        <CreateGallery />
      </Route>
    </Switch>
  );
};

export default Router;
