/* eslint-disable @next/next/no-img-element */
"use client";

import Button from "@/components/ui/Button";
import { HandleLoginWithGoogle } from "@/utils/login";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen text-white flex items-center">
      <div className="max-w-6xl md:mt-18 mx-auto">
        <div className="px-2 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <div className="pt-10 lg:pt-0 flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 10,
                duration: 0.5,
              }}
              className="text-3xl sm:text-5xl md:text-5xl font-bold mb-4 sm:leading-12 md:leading-14 text-center lg:text-left tracking-tight"
            >
              Unleash Your Team&apos;s Creativity with Our{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-pulse">
                Collaborative Whiteboard
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 10,
                duration: 0.5,
                delay: 0.1,
              }}
              className="text-lg text-neutral-200 font-light mb-6 text-center leading-7 lg:text-left lg:leading-7 max-w-xl"
            >
              Transform brainstorming with our powerful online whiteboard{" "}
              <br className="hidden sm:block" />
              collaborate live, visualize ideas, and bring projects to life.
            </motion.div>

            {/* Feature highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 10,
                duration: 0.5,
                delay: 0.15,
              }}
              className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start"
            >
              {["✨ Real-time sync", "🎨 Infinite canvas", "🚀 Fast setup"].map(
                (feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-500/10 border border-blue-400/20 rounded-full text-xs text-blue-300 backdrop-blur-sm"
                  >
                    {feature}
                  </span>
                )
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 10,
                duration: 0.5,
                delay: 0.2,
              }}
              className="flex flex-col sm:flex-row gap-4 items-center"
            >
              <Button
                onClick={HandleLoginWithGoogle}
                className="font-semibold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 shadow-lg hover:shadow-xl shadow-blue-600/40 transition-all duration-300 cursor-pointer hover:scale-105 px-8 py-3"
              >
                Get Started
              </Button>
            </motion.div>
          </div>

          <div className="rounded-lg p-4 hidden lg:block relative">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-3xl"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 5,
                duration: 0.5,
                delay: 0.1,
              }}
              className="relative z-10"
            >
              <img
                src="/hero.svg"
                alt="DrawSync collaborative whiteboard illustration showing team creativity"
                className="w-full h-full object-cover drop-shadow-2xl"
              />
            </motion.div>

            {/* Floating elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-16 right-8 w-8 h-8 bg-blue-400/20 rounded-full blur-sm"
            ></motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-20 left-6 w-6 h-6 bg-purple-400/20 rounded-full blur-sm"
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
