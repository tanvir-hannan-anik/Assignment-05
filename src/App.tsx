import HeroSection from "./component/HeroSection";
import Nav from "./component/Nav";
import TechnologySection from "./component/TechnologySection";
import "./App.css";
import Footer from "./component/Footer";

function App() {

    return (
        <>
            <Nav />
            <HeroSection />
            <TechnologySection />
            <Footer></Footer>
        </>
    );
}

export default App;