import { Switch, Route } from "react-router-dom";
import { Author } from "./pages/AuthorApp";
import { CreateGallery } from "./pages/CreateGalleryApp";
import { Galleries } from "./pages/GalleriesApp";
import { Gallery } from "./pages/GalleryApp";
import { Login } from "./pages/LoginApp";
import { MyGalleries } from "./pages/MyGalleriesApp";
import { Register } from "./pages/RegisterApp";
import { EditGallery } from "./pages/EditGalleryApp";
import GuardedRoute from "./components/common/GuardedRoute";
import GuestRoute from "./components/common/GuestRoute";

const Router = () => {
  return (
    <Switch>
      <Route component={Galleries} exact path="/" />
      <Route component={Gallery} path="/galleries/:id" />
      <GuardedRoute component={CreateGallery} path="/create" />
      <Route component={Author} path="/authors/:id" />
      <GuestRoute component={Login} path="/login" />
      <GuestRoute component={Register} path="/register" />
      <GuardedRoute component={MyGalleries} path="/my-galleries" />
      <GuardedRoute component={EditGallery} path="/edit-gallery/:id" />
    </Switch>
  );
};

export default Router;
