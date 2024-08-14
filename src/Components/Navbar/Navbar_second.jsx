import React, { useEffect, useState } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const initialNavigation = [
  { name: "Home", href: "/", current: false },
  {
    name: "Products",
    href: "/products",
    current: false,
    subItems: [
      {
        nameEn: "Automation Systems",
        href: "/automation-systems",
        subSubItems: [
          { nameEn: "Programmable Logic Controller (PLC)", href: "/plc" },
          { nameEn: "Motion Controllers", href: "/motion-controllers" },
          { nameEn: "Human Machine Interface (HMI)", href: "/hmi" },
          { nameEn: "External Input/Output (DI/DO)", href: "/external" },
        ],
      },
      { nameEn: "Motion & Drives", href: "" },
      { nameEn: "Sensing", href: "" },
      { nameEn: "Control Components", href: "" },
    ],
  },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarSecond() {
  const location = useLocation();
  const [navigation, setNavigation] = useState(initialNavigation);
  const [showSubMenu, setShowSubMenu] = useState(null);
  const [showMobileSubMenu, setShowMobileSubMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const storedUsername = localStorage.getItem("username");
    setIsLoggedIn(loggedIn);
    setUsername(storedUsername);
  }, []);

  useEffect(() => {
    const updatedNavigation = initialNavigation.map((item) => {
      const isSubItemCurrent = item.subItems?.some((subItem) =>
        subItem.subSubItems?.some((subSubItem) => location.pathname === subSubItem.href)
      );
      return {
        ...item,
        current: location.pathname === item.href || isSubItemCurrent,
      };
    });

    if (isLoggedIn) {
      updatedNavigation.push({ name: "Admin", href: "/admin", current: location.pathname === "/admin" });
    }

    setNavigation(updatedNavigation);
  }, [location, isLoggedIn]);




  return (
    <Disclosure as="nav" className="navbar bg-black text-white">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex flex-shrink-0 items-center"></div>
              <div className={`flex flex-1 items-center justify-center `}>
                <div className="absolute inset-y-0 flex items-center md:hidden">
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="hidden md:block">
                  <div className="flex gap-2">
                    {navigation.map((item) => (
                      <div
                        key={item.name}
                        className="lg:pe-1 relative"
                        onMouseEnter={() => setShowSubMenu(item.name)}
                        onMouseLeave={() => setShowSubMenu(null)}
                      >
                        {item.subItems ? (
                          <>
                            <Link
                              to={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-primaryColor text-white"
                                  : "text-white hover:bg-primaryColor hover:text-white",
                                "rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </Link>
                            {showSubMenu === item.name && (
                              <ul
                                className={`absolute z-[1000] mt-1 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-surface-dark `}
                                aria-labelledby="dropdownMenuButton2"
                              >
                                {item.subItems.map((subItem) => (
                                  <li key={subItem.nameEn} className="relative">
                                    <Link
                                      to={subItem.href}
                                      className={`block w-full bg-white px-4 py-2 text-sm font-normal hover:bg-primaryColor text-black hover:text-white`}
                                    >
                                      {subItem.nameEn}
                                    </Link>
                                    {subItem.subSubItems && (
                                      <ul className="absolute left-full top-0 z-50 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-surface-dark">
                                        {subItem.subSubItems.map((subSubItem) => (
                                          <li key={subSubItem.nameEn}>
                                            <Link
                                              to={subSubItem.href}
                                              className={`block w-full bg-white px-4 py-2 text-sm font-normal hover:bg-primaryColor text-black hover:text-white`}
                                            >
                                              {subSubItem.nameEn}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            )}

                          </>
                        ) : (
                          <Link
                            to={item.href}
                            className={classNames(
                              item.current
                                ? "bg-primaryColor text-white"
                                : "text-white hover:bg-primaryColor hover:text-white",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <DisclosureButton
                    as="a"
                    onClick={() => {
                      if (item.subItems) {
                        setShowMobileSubMenu(!showMobileSubMenu);
                      }
                    }}
                    className={classNames(
                      item.current
                        ? "bg-primaryColor text-white"
                        : "text-white hover:bg-primaryColor hover:text-white",
                      "block rounded-md px-3 py-2 mb-2 text-base font-medium cursor-pointer"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </DisclosureButton>
                  {item.subItems && showMobileSubMenu && (
                    <div className="pl-2">
                      {item.subItems.map((subItem) => (
                        <div key={subItem.nameEn}>
                          <Link
                            to={subItem.href}
                            className={`block w-full whitespace-nowrap bg-white text-black px-4 py-2 text-sm font-normal hover:bg-primaryColor hover:text-white `}
                          >
                            {subItem.nameEn}
                          </Link>
                          {subItem.subSubItems && (
                            <div className="pl-4">
                              {subItem.subSubItems.map((subSubItem) => (
                                <Link
                                  key={subSubItem.nameEn}
                                  to={subSubItem.href}
                                  className={`block w-full whitespace-nowrap bg-blue-500 text-white px-4 py-2 text-sm font-normal hover:bg-primaryColor hover:text-white `}
                                >
                                  {subSubItem.nameEn}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
