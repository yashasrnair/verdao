import React from "react";
import {
  FaLeaf,
  FaTwitter,
  FaDiscord,
  FaTelegram,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import type { IconBaseProps } from "react-icons/lib";

export default function Footer() {
  return (
    <footer className="bg-[#0e1624] text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand & Description */}
        <div>
          <div className="flex items-center gap-2 text-white font-bold text-xl mb-2">
            {React.createElement(FaLeaf as React.ComponentType<IconBaseProps>)} VerdAO
          </div>
          <p className="text-sm max-w-xs text-gray-400">
            Building the future of sustainable carbon trading through decentralized governance.
          </p>
          <div className="flex gap-4 mt-4 text-xl text-gray-400">
            {React.createElement(FaTwitter as React.ComponentType<IconBaseProps>, {
              className: "hover:text-white cursor-pointer transition",
            })}
            {React.createElement(FaDiscord as React.ComponentType<IconBaseProps>, {
              className: "hover:text-white cursor-pointer transition",
            })}
            {React.createElement(FaTelegram as React.ComponentType<IconBaseProps>, {
              className: "hover:text-white cursor-pointer transition",
            })}
            {React.createElement(FaGithub as React.ComponentType<IconBaseProps>, {
              className: "hover:text-white cursor-pointer transition",
            })}
          </div>
        </div>

        {/* Platform Links */}
        <div>
          <h3 className="font-bold text-white mb-4 text-lg">Platform</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <button
                type="button"
                className="text-gray-400 hover:text-white underline cursor-pointer bg-transparent border-none p-0"
                aria-label="Voting System"
              >
                Voting System
              </button>
            </li>
            <li>
              <button
                type="button"
                className="text-gray-400 hover:text-white underline cursor-pointer bg-transparent border-none p-0"
                aria-label="Quality Standards"
              >
                Quality Standards
              </button>
            </li>
            <li>
              <button
                type="button"
                className="text-gray-400 hover:text-white underline cursor-pointer bg-transparent border-none p-0"
                aria-label="Stakeholder Info"
              >
                Stakeholder Info
              </button>
            </li>
            <li>
              <button
                type="button"
                className="text-gray-400 hover:text-white underline cursor-pointer bg-transparent border-none p-0"
                aria-label="Risk Assessment"
              >
                Risk Assessment
              </button>
            </li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="font-bold text-white mb-4 text-lg">Resources</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <button
                type="button"
                className="text-gray-400 hover:text-white underline cursor-pointer bg-transparent border-none p-0"
                aria-label="Documentation"
              >
                Documentation
              </button>
            </li>
            <li>
              <button
                type="button"
                className="text-gray-400 hover:text-white underline cursor-pointer bg-transparent border-none p-0"
                aria-label="API Reference"
              >
                API Reference
              </button>
            </li>
            <li>
              <button
                type="button"
                className="text-gray-400 hover:text-white underline cursor-pointer bg-transparent border-none p-0"
                aria-label="Community"
              >
                Community
              </button>
            </li>
            <li>
              <button
                type="button"
                className="text-gray-400 hover:text-white underline cursor-pointer bg-transparent border-none p-0"
                aria-label="Support"
              >
                Support
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-white mb-4 text-lg">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              {React.createElement(FaEnvelope as React.ComponentType<IconBaseProps>, {
                className: "text-white",
              })} hello@verdao.org
            </li>
            <li className="flex items-center gap-2">
              {React.createElement(FaMapMarkerAlt as React.ComponentType<IconBaseProps>, {
                className: "text-white",
              })} Global Network
            </li>
            <li className="flex items-center gap-2">
              {React.createElement(FaPhoneAlt as React.ComponentType<IconBaseProps>, {
                className: "text-white",
              })} 24/7 Support
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-sm text-gray-500 text-center flex flex-col sm:flex-row justify-between items-center">
        <p>© 2025 VerdAO Platform. All rights reserved.</p>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <button
            type="button"
            className="bg-transparent border-none text-gray-400 hover:text-white underline cursor-pointer p-0"
            aria-label="Privacy Policy"
          >
            Privacy Policy
          </button>
          <button
            type="button"
            className="bg-transparent border-none text-gray-400 hover:text-white underline cursor-pointer p-0"
            aria-label="Terms of Service"
          >
            Terms of Service
          </button>
          <button
            type="button"
            className="bg-transparent border-none text-gray-400 hover:text-white underline cursor-pointer p-0"
            aria-label="Cookie Policy"
          >
            Cookie Policy
          </button>
        </div>
      </div>
    </footer>
  );
}
