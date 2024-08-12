import Navbar from "./Navbar/Navbar";
import Navbar_second from "./Navbar/Navbar_second";
import Slider from "./Slider"
import Features from "./Features/Features"
import HomeSolutions from "./Home Solutions/HomeSolutions"
import Navbar_third from "./Navbar/Navbar_third";

const Home = () => {
    return (
        <>
        <Navbar/>
        <Navbar_second/>
        <Navbar_third/>
        <Slider/>
        
        <HomeSolutions/>
        <Features/>
        </>
        );
}
export default Home;