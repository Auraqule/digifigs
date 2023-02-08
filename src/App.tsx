import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./Home";
import { Dashboard, ShareWishList, SignUp, Welcome } from "./pages";
const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />}> */}
      <Route index element={<Home />} />
      <Route path="share-wishlist" element={<ShareWishList />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="welcome" element={<Welcome />} />

      {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
      {/* <Route path="*" element={<NoMatch />} /> */}
      {/* </Route> */}
    </Routes>
  );
};

export default App;
