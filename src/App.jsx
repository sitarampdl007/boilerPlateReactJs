import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import SuspenseWrapper from "./component/SuspenseWrapper/SuspenseWrapper";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <SuspenseWrapper>
                <Home />
              </SuspenseWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <SuspenseWrapper>
                <About />
              </SuspenseWrapper>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
