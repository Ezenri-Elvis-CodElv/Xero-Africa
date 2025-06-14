import React, { useState, useRef, useEffect } from "react";
import { FaAndroid, FaApple, FaTimes } from "react-icons/fa";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { Drawer, Button as AntdButton } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About Us", path: "/about-us" },
  { label: "Contact Us", path: "/contact-us" },
  { label: "Products", path: "/products" },
  { label: "FAQs", path: "/faqs" },
];
const PLAY_STORE_URL = "https://play.google.com/store";
const APP_STORE_URL = "https://www.apple.com/app-store/";

function Spinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-6 h-6 border-4 border-gray-600 border-t-cyan-400 rounded-full animate-spin"></div>
    </div>
  );
}

const Header = () => {
  const location = useLocation();
  const [showDesktopDropdown, setShowDesktopDropdown] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const [desktopLoading, setDesktopLoading] = useState(false);
  const [mobileLoading, setMobileLoading] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const nav = useNavigate();

  const activeIndex = navItems.findIndex(
    (item) => location.pathname === item.path
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (desktopDropdownRef.current?.contains(event.target)) return;
      if (mobileDropdownRef.current?.contains(event.target)) return;
      setShowDesktopDropdown(false);
      setShowMobileDropdown(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownload = (url, isDesktop) => {
    if (isDesktop) {
      setDesktopLoading(true);
      setTimeout(() => {
        setDesktopLoading(false);
        setShowDesktopDropdown(false);
        window.open(url, "_blank");
      }, 1500);
    } else {
      setMobileLoading(true);
      setTimeout(() => {
        setMobileLoading(false);
        setShowMobileDropdown(false);
        window.open(url, "_blank");
      }, 1500);
    }
  };

  const handleNav = (path) => {
    nav(path);
    setDrawerOpen(false);
  };

  return (
    <div
      className={`
        w-full h-[12vh] flex items-center justify-between px-4 fixed top-0 left-0 z-[999]
        transition-all duration-500
        ${
          isSticky
            ? "shadow-xl backdrop-blur-lg bg-gray-900/80 border-b border-gray-700/50"
            : "bg-transparent"
        }
      `}
      style={{
        transition: "all 0.5s cubic-bezier(.4,2,.3,1)",
        willChange: "transform, box-shadow, border-radius",
      }}
    >
      {/* Logo Section */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => handleNav("/")}
      >
        <img src="/Option.jpg" alt="logo" className="w-10 h-10 rounded-lg" />
        <h2 className='text-3xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-["WDXL_Lubrifont_TC",_sans-serif]'>
          XERO AFRICA
        </h2>
      </div>

      {/* Centered Nav Items */}
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <ul className="flex flex-row items-center gap-x-9 font-bold text-lg">
          {navItems.map((item, idx) => (
            <li
              key={item.label}
              className="relative px-4 py-2 cursor-pointer group"
              onClick={() => handleNav(item.path)}
            >
              <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                {item.label}
              </span>
              <span
                className={`
                  absolute left-0 bottom-0 h-0.5 w-full
                  bg-gradient-to-r from-cyan-400 to-blue-500 rounded
                  origin-left
                  transition-transform duration-300
                  ${
                    activeIndex === idx
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }
                `}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Download Button Section */}
      <div className="hidden md:flex w-[30%] h-full items-center justify-end pr-6">
        <div className="relative" ref={desktopDropdownRef}>
          <Motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-black rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 cursor-pointer shadow-lg shadow-cyan-500/30"
            onClick={() => setShowDesktopDropdown((v) => !v)}
            aria-expanded={showDesktopDropdown}
            aria-haspopup="true"
          >
            Download
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Motion.button>
          <div
            className={`absolute right-0 mt-2 w-44 bg-gray-800/80 backdrop-blur-lg border border-gray-700/50 rounded-lg shadow-lg z-50 transition-all duration-300 overflow-hidden
              ${
                showDesktopDropdown
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0 pointer-events-none"
              }
            `}
            role="menu"
            style={{ cursor: "pointer" }}
          >
            <button
              className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-700/50 cursor-pointer text-gray-300 hover:text-white transition-colors"
              onClick={() => handleDownload(PLAY_STORE_URL, true)}
              disabled={desktopLoading}
              role="menuitem"
            >
              <FaAndroid className="text-green-400" /> Android
            </button>
            <button
              className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-700/50 cursor-pointer text-gray-300 hover:text-white transition-colors"
              onClick={() => handleDownload(APP_STORE_URL, true)}
              disabled={desktopLoading}
              role="menuitem"
            >
              <FaApple className="text-gray-300" /> iOS
            </button>
          </div>
          {desktopLoading && showDesktopDropdown && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800/90 rounded-lg z-20">
              <Spinner />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className="flex md:hidden items-center">
        <button
          onClick={() => setDrawerOpen(true)}
          className="text-4xl text-cyan-400 hover:text-cyan-300 transition-colors"
          aria-label="Open menu"
        >
          <HiOutlineBars3BottomRight />
        </button>
        <Drawer
          title={
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="/Option.jpg"
                  alt="logo"
                  className="w-8 h-8 rounded-lg"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  XERO AFRICA
                </span>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="text-cyan-400 hover:text-cyan-300"
              >
                <FaTimes />
              </button>
            </div>
          }
          placement="right"
          onClose={() => {
            setDrawerOpen(false);
            setShowMobileDropdown(false);
          }}
          open={drawerOpen}
          className="[&_.ant-drawer-header]:pt-6 [&_.ant-drawer-header]:bg-gray-900/80 [&_.ant-drawer-header]:border-b-gray-700/50 [&_.ant-drawer-title]:text-white"
          headerStyle={{
            background: "rgba(17, 24, 39, 0.8)",
            borderBottom: "1px solid rgba(55, 65, 81, 0.5)",
          }}
          bodyStyle={{ background: "rgba(17, 24, 39, 0.8)", padding: "20px" }}
          maskStyle={{ background: "rgba(0, 0, 0, 0.7)" }}
        >
          <ul className="flex flex-col gap-y-4 font-bold text-lg mb-8">
            {navItems.map((item, idx) => (
              <li
                key={item.label}
                className={`px-4 py-2 cursor-pointer rounded-lg transition-all ${
                  activeIndex === idx
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400"
                    : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                }`}
                onClick={() => handleNav(item.path)}
              >
                {item.label}
              </li>
            ))}
          </ul>
          <div className="relative mt-4" ref={mobileDropdownRef}>
            <AntdButton
              type="primary"
              className="w-full h-14 flex items-center justify-center gap-2 text-base cursor-pointer "
              onClick={() => setShowMobileDropdown((v) => !v)}
              aria-expanded={showMobileDropdown}
              aria-haspopup="true"
              style={{
                backgroundImage: "linear-gradient(to right, #06b6d4, #3b82f6)",
                border: "0",
              }}
            >
              Download
            </AntdButton>
            <div
              className={`w-full bg-gray-800/80 backdrop-blur-lg border border-gray-700/50 rounded-lg shadow-lg z-50 transition-all duration-300 overflow-hidden mt-2
                ${
                  showMobileDropdown
                    ? "max-h-96 opacity-100 "
                    : "max-h-0 opacity-0 pointer-events-none"
                }
              `}
              role="menu"
              style={{ cursor: "pointer" }}
            >
              <button
                className="w-full flex items-center gap-2 px-4 py-4 hover:bg-gray-700/50 cursor-pointer text-gray-300 hover:text-white transition-colors"
                onClick={() => handleDownload(PLAY_STORE_URL, false)}
                disabled={mobileLoading}
                role="menuitem"
              >
                <FaAndroid className="text-green-400" /> Android
              </button>
              <button
                className="w-full flex items-center gap-2 px-4 py-4 hover:bg-gray-700/50 cursor-pointer text-gray-300 hover:text-white transition-colors"
                onClick={() => handleDownload(APP_STORE_URL, false)}
                disabled={mobileLoading}
                role="menuitem"
              >
                <FaApple className="text-gray-300" /> iOS
              </button>
            </div>
            {mobileLoading && showMobileDropdown && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800/90 rounded-lg z-20">
                <Spinner />
              </div>
            )}
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
