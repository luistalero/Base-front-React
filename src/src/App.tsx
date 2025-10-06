import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Header } from "./components";
import "./App.css";
import { publicRoutes } from "./routes";
import { lazy, Suspense } from "react";
import { Home } from "./pages";
import Loading from "./components/Loading";

function App() {
  const AboutSection = lazy(() => import("src/sections/Aboutsec"));
  const HomeSection = lazy(() => import("src/sections/HomeSec"));
  const Services = lazy(() => import("src/pages/Services"));
  const Contact = lazy(() => import("src/pages/Contact"));
  const NotFound = lazy(() => import("src/pages/NotFound"));
  const ProviderSection = lazy(() => import("src/sections/Provsec"));
  const WhoSection = lazy(() => import("src/sections/Whosec"));
  const WithSection = lazy(() => import("src/sections/Withsec"));

  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Header />
        {/* <div className="container"> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path={`${publicRoutes.LANDING}/*`} element={<Home />} />
            <Route path={`${publicRoutes.SECHOME}/*`} element={<HomeSection />} />
            <Route path={`${publicRoutes.ABOUT}/*`} element={<AboutSection />} />
            <Route path={`${publicRoutes.PROVIDER}/*`} element={<ProviderSection />} />
            <Route path={`${publicRoutes.WHO}/*`} element={<WhoSection />} />
            <Route path={`${publicRoutes.WITH}/*`} element={<WithSection />} />
            <Route path={`${publicRoutes.PRODUCT_DETAIL}/*`} element={<Services />} />
            <Route path={`${publicRoutes.CONTACT_US}/*`} element={<Contact />} />
            <Route path={publicRoutes.NOT_FOUND} element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        {/* </div> */}
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
