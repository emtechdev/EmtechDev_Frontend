import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const initialNavigation = [
  { name: "Home", href: "/", current: false },
  { name: "Products", href: "/products", current: false ,
    subItems: [
      { nameEn: "Automation Systems", href: "/automation-systems",},
      { nameEn: "Motion & Drives",  },
      { nameEn: "Sensing", },
      { nameEn: "Control Components",  },
    ],
  },
  { name: "Solutions", href: "/solutions", current: false },
  { name: "Services", href: "/services", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarSecond() {
  const location = useLocation();
  const [navigation, setNavigation] = useState(initialNavigation);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showMobileSubMenu, setShowMobileSubMenu] = useState(false);

  useEffect(() => {
    const updatedNavigation = initialNavigation.map((item) => {
      const isSubItemCurrent = item.subItems?.some((subItem) => location.pathname === subItem.to);
      return {
        ...item,
        current: location.pathname === item.href || isSubItemCurrent,
      };
    });
    setNavigation(updatedNavigation);
  }, [location]);

  return (
    <Disclosure as="nav" className="navbar bg-black text-white">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex flex-shrink-0 items-center">

              </div>
              <div className={`flex flex-1 items-center justify-center `}>
                <div className="absolute inset-y-0 flex items-center md:hidden">
                  {/* Mobile menu button */}
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
                    {navigation.map((item) => {

                      return (
                        <div
                          key={item.name}
                          className=" lg:pe-1 relative"
                          data-twe-nav-item-ref
                          onMouseEnter={() => setShowSubMenu(item.subItems ? true : false)}
                          onMouseLeave={() => setShowSubMenu(false)}
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
                               data-twe-nav-link-ref
                              >
                                {item.name}
                              </Link>
                              {showSubMenu && (
                                <ul
                                  className={`absolute z-[1000] mt-1 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-surface-dark `}
                                  aria-labelledby="dropdownMenuButton2"
                                >
                                  {item.subItems.map((subItem) => (
                                    <li key={subItem.nameEn}>
                                      <Link
                                        to={subItem.href}
                                        className={`block w-full bg-white px-4 py-2 text-sm font-normal hover:bg-primaryColor text-black hover:text-white`}
                                        data-twe-dropdown-item-ref
                                      >
                                        {subItem.nameEn}
                                      </Link>
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
                              data-twe-nav-link-ref
                            >
                              {item.name}
                            </Link>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
             
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className=" px-2 pb-3 pt-2">
              {navigation.map((item) => {
               
                return (
                  <Link key={item.name} to={item.href}>
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
                          <Link
                            key={subItem.nameEn}
                            to={subItem.href}
                            className={`block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal dark:text-black dark:hover:bg-SecondColor hover:text-white `}
                            data-twe-dropdown-item-ref
                          >
                           {subItem.nameEn}
                          </Link>
                        ))}
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          </DisclosurePanel>
          
        </>
      )}
    </Disclosure>
  );
}
