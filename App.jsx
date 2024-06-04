import Footer from "./Components/footer/footer";
import Header from "./Components/header";
import Main from "./Components/main";
import { Route, Routes } from "react-router-dom";
import CreateMovie from "./Components/pages/movie/create";
import PopularMovie from "./Components/pages/movie/popular";
import NowPlayingMovie from "./Components/pages/movie/nowplaying";
import TopRatedMovie from "./Components/pages/movie/toprated";
import Layout from "./Components/layout";

/**
 * membuat component app
 * component utama ysng menampung components lain
 */

function App() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/create" element={<CreateMovie />}></Route>
        <Route path="/movie/popular" element={<PopularMovie />}></Route>
        <Route path="/movie/now" element={<NowPlayingMovie />}></Route>
        <Route path="/movie/top" element={<TopRatedMovie />}></Route>
      </Routes>
      </Layout>
    </div>
  );
}

export default App;
