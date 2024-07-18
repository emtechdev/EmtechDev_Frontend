import Navbar from "./Navbar/Navbar";
import Navbar_second from "./Navbar/Navbar_second";
import Slider from "./Slider"
import Features from "./Features/Features"
import HomeSolutions from "./Home Solutions/HomeSolutions"

const Home = () => {
    return (
        <>
        <Navbar/>
        <Navbar_second/>
        <Slider/>
        
        <HomeSolutions/>
        <Features/>
        </>
        );
}
export default Home;