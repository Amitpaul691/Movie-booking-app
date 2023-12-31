import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "../../pages/authentication/Auth";
import LandingPage from "../../pages/landingpage/LandingPage";
import Admin from "../../pages/admin/Admin";
import React from "react";
import MovieDetais from "../../pages/movieDetail/MovieDetail";
import MovieTheaters from "../../pages/movieTheaters/MovieTheaters";

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<AuthPage />} />

        <Route exact path="/" element={<LandingPage />} />

        <Route exact path="/admin" element={<Admin />} />

        <Route exact path="/movie/:movieId/details" element={<MovieDetais />} />

        <Route
          exact
          path="/buytickets/:movieName/:movieId"
          element={<MovieTheaters />}
        />
      </Routes>
    </Router>
  );
};

export default AppRoute;
