import React, { ComponentType } from "react";
import { FaRocket, FaBookOpen } from "react-icons/fa";

const RocketIcon = FaRocket as ComponentType<{ size?: number; className?: string }>;
const BookIcon = FaBookOpen as ComponentType<{ size?: number; className?: string }>;

export default function CallToAction() {
  return (
    <section className="py-24 bg-black text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          Ready to Shape the Future of Carbon Credits?
        </h2>
        <p className="mt-6 text-lg sm:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
          Join our decentralized community and help establish the standards
          that will define sustainable carbon trading for generations.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            type="button"
            className="flex items-center gap-2 px-6 py-4 rounded-xl text-white font-semibold text-lg bg-white/10 hover:bg-white/20 hover:scale-105 transform transition duration-300 disabled:opacity-30 cursor-not-allowed"
            disabled
          >
            <RocketIcon size={18} className="text-white" />
            Get Started Today
          </button>

          <a
            href="https://your-documentation-url.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-4 rounded-xl text-white font-semibold text-lg border border-white hover:bg-white/10 hover:scale-105 transform transition duration-300"
          >
            <BookIcon size={18} className="text-white" />
            Read Documentation
          </a>
        </div>
      </div>
    </section>
  );
}
