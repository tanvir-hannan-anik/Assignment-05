import HeroSection from "./component/HeroSection";
import Nav from "./component/Nav";
import TechnologySection from "./component/TechnologySection";
import Footer from "./component/Footer";
import { Suspense } from "react";

function App() {

    return (
        <>
            <Nav />
            <HeroSection />
            <Suspense fallback={<p>Loading....</p>}>
                <TechnologySection />
            </Suspense>
            <Footer></Footer>
        </>
    );
}

export default App;