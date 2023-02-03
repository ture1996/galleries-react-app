import { NavBar } from "./NavBar";

const Page = ({ children }) => {
  return (
    <div>
      <NavBar />
      <br />
      {children}
    </div>
  );
};

export default Page;
