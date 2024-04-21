import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/layout";
import Album from "./pages/Albums";
import Songs from "./pages/songs/[id]";
import ContactUs from "./pages/ContactUs";
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Album />} path="/albums" />
          <Route element={<Songs />} path="/songs/:id" />
          <Route element={<ContactUs />} path="/contact" />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
