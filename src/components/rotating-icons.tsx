"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function RotatingIcons() {
  const icons = [
    <div key="quickbook" className=" p-6">
      <Image alt="quickbook" src="/rotating-icons/quick-book.svg" fill />
    </div>,
    <div key="xero" className=" p-6">
      <Image alt="xero" src="/rotating-icons/xero.svg" fill />
    </div>,
    <div key="sage" className=" p-6">
      <Image alt="sage" src="/rotating-icons/sage.svg" fill />
    </div>,
    <div key="b" className=" p-6">
      <Image alt="b" src="/rotating-icons/b.svg" fill/>
    </div>,
    <div key="phone" className=" p-6">
      <Image alt="phone" src="/rotating-icons/phone.svg" fill />
    </div>,
    <div key="outlook" className=" p-6">
      <Image alt="outlook" src="/rotating-icons/outlook.svg" fill />
    </div>,
    <div key="gmail" className=" p-6">
      <Image alt="gmail" src="/rotating-icons/gmail.svg" fill />
    </div>,
    <div key="whatsapp" className=" p-6">
      <Image alt="whatsapp" src="/rotating-icons/whatsapp.svg" fill />
    </div>,
  ];

  return (
    <div className="relative flex flex-col  items-center justify-center gap-8 px-4 sm:px-6 mt-10">
      <div className="flex items-center justify-center">
        <div className="relative   h-[350px] w-[350px] scale-[70%] md:scale-100">
          <div className="relative h-full rounded-full border border-gray-800">
            <div className="absolute inset-20 rounded-full bg-gradient-to-b from-[rgba(113,134,255,0.2)] via-[rgba(254,117,135,0.1)] to-[rgba(254,117,135,0.2)]" />

            {icons.map((icon, index) => (
              <motion.div
                key={index}
                className="absolute top-1/2 -translate-x-20 transform"
                style={{
                  originX: "180px",
                  originY: "-8px",
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 12,
                  ease: "linear",
                  delay: index * 1.52,
                }}
              >
                <motion.div
                  style={{
                    rotate: index * 100,
                  }}
                  animate={{
                    rotate: [0, -360],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 12,
                    ease: "linear",
                    delay: index * 1.52,
                  }}
                >
                  {icon}
                </motion.div>
              </motion.div>
            ))}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              <div className="flex items-center justify-center gap-2">
                <Image
                  src="/assets/simple-ar-logo.svg"
                  alt="Simple AR"
                  height={31}
                  width={26}
                />
                <p className="font-bold text-xl tracking-normal text-center">
                  Simple AR
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
