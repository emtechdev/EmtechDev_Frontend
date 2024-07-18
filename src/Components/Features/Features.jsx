import React from "react";
import "./Features.css";
import FeatureImage1 from "../../assets/feature-1.png";
import FeatureImage2 from "../../assets/feature-2.png";
import FeatureImage3 from "../../assets/feature-3.png";
import FeatureImage4 from "../../assets/feature-4.png";
import FeatureImage5 from "../../assets/feature-5.png";
import { FaCubes, FaMagic, FaRocket, FaCode, FaChartBar } from "react-icons/fa";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function Features() {
  const data = [
    {
      label: "Modular Solution",
      icon: <FaCubes className="size-7 mx-auto mb-2 text-primaryColor" />,
      value: "Modular Solution",
      img: FeatureImage1,
    },
    {
      label: "Connectivity",
      icon: <FaMagic className="size-7 mx-auto mb-2 text-primaryColor" />,
      value: "Connectivity",
      img: FeatureImage2,
    },
    {
      label: "Web-based Solution",
      icon: <FaRocket className="size-7 mx-auto mb-2 text-primaryColor" />,
      value: "Web-based Solution",
      img: FeatureImage3,
    },
    {
      label: "Deployment and Integration",
      icon: <FaCode className="size-7 mx-auto mb-2 text-primaryColor" />,
      value: "Deployment and Integration",
      img: FeatureImage4,
    },
    {
      label: "Alarms & Reports",
      icon: <FaChartBar className="size-7 mx-auto mb-2 text-primaryColor" />,
      value: "Alarms & Reports",
      img: FeatureImage5,
    },
  ];
  return (
    <>
      <div id="features" className="features-section py-10 bg-gray-200 px-10">
        <h2 className="features_title text-center mb-5 text-3xl">
          Kojo Smart manufacturing Solutions
        </h2>
        <p className="features_intro text-center mb-10 text-gray-700">
          Empower Your Digital Transformation Journey
        </p>
        <Tabs value="Modular Solution">
          <TabsHeader className="tabs-list flex gap-3 flex-wrap justify-center">
            {data.map(({ label, value, icon }) => (
              <Tab
                key={value}
                value={value}
                className="bg-white flex items-center justify-center rounded-lg text-sm w-auto p-3"
              >
                {icon}
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, img }) => (
              <TabPanel key={value} value={value}>
                <img src={img} alt="Img_Feature" className="tab_img mx-auto" />
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </>
  );
}
