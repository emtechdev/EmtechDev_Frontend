import Navbar from "./Navbar/Navbar";
import Navbar_second from "./Navbar/Navbar_second";
const Products = () => {
    return (
        <>
        <Navbar />
        <Navbar_second/>
        <div className="container mx-auto">
    <h1
      className="pb-5 mx-4 mt-5 font-open-sans text-[34px]">
      Products</h1>
  </div>
  <div className="bg-custom-emphasis">
    <div className="container mx-auto">
        <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mt-10">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="bg-gray-200 py-3 pl-4">
                        <a href="automation_system.html" className="text-custom-blue text-[15px] font-bold font-sans">Automation Systems</a>
                    </div>
                    <div className="p-4">
                        <ul className="list-disc ">
                            <li><a href="plc" className="text-black hover:text-blue-600 font-sans text-[14px]">Programmable Logic Controller (PLC)</a></li>
                            <li><a href="hmi" className="text-black hover:text-blue-600 font-sans text-[14px]">Human Machine Interface (HMI)</a></li>
                            <li><a href="motion_controllers.html" className="text-black hover:text-blue-600 font-sans text-[14px]">Motion Controllers</a></li>
                            <li><a href="external.html" className="text-black hover:text-blue-600 font-sans text-[14px]">External Input/ Output (DI/ DO)</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mt-10">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="bg-gray-200 py-3 pl-4">
                        <a href="motionanddrives.html" className="text-custom-blue text-[15px] font-bold font-sans">Motion & Drives</a>
                    </div>
                    <div className="p-4">
                        <ul className="list-disc">
                            <li><a href="inverter" className="text-black hover:text-blue-600 font-sans text-[14px]">Variable Speed Drives</a></li>
                            <li><a href="servo_system.html" className="text-black hover:text-blue-600 font-sans text-[14px]">Servo Systems</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mt-10">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="bg-gray-200 py-3 pl-4">
                        <a href="sensing.html" className="text-custom-blue text-[15px] font-bold font-sans">Sensing</a>
                    </div>
                    <div className="p-4">
                        <ul className="list-disc">
                            <li><a href="#" className="text-black hover:text-blue-600 font-sans text-[14px]">Photoelectric Sensors</a></li>
                            <li><a href="#" className="text-black hover:text-blue-600 font-sans text-[14px]">Mark and colour sensors</a></li>
                            <li><a href="#" className="text-black hover:text-blue-600 font-sans text-[14px]">Fiber Optic Sensors and amplifiers</a></li>
                            <li><a href="#" className="text-black hover:text-blue-600 font-sans text-[14px]">Inductive Sensors</a></li>
                            <li><a href="#" className="text-black hover:text-blue-600 font-sans text-[14px]">Rotary Encoders</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mt-10 mb-10">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="bg-gray-200 py-3 pl-4">
                        <a href="controlcomponents.html" className="text-custom-blue text-[15px] font-bold font-sans">Control Components</a>
                    </div>
                    <div className="p-4">
                        <ul className="list-disc">
                            <li><a href="#" className="text-black hover:text-blue-600 font-sans text-[14px]">Temperature Controllers</a></li>
                            <li><a href="power_supply" className="text-black hover:text-blue-600 font-sans text-[14px]">Power Supplies</a></li>
                            <li><a href="#" className="text-black hover:text-blue-600 font-sans text-[14px]">Timers</a></li>
                            <li><a href="#" className="text-black hover:text-blue-600 font-sans text-[14px]">Counters</a></li>
                            <li><a href="relay" className="text-black hover:text-blue-600 font-sans text-[14px]">Relay</a></li>
                            <li><a href="solid_state_relay.html" className="text-black hover:text-blue-600 font-sans text-[14px]">Solid State Relay</a></li>
                            <li><a href="photocell" className="text-black hover:text-blue-600 font-sans text-[14px]">Photocell</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        </>
        );
}
export default Products;