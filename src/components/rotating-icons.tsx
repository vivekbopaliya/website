"use client";

import React from "react";
import Image from "next/image";
interface Icon {
  key: string;
  src: string;
  position: {
    angle: number;
  };
}
export default function StaticIcons() {
  const leftIcons = [
    {
      key: "quickbook",
      src: "/rotating-icons/quick-book.svg",
      position: { angle: 235 },
    },
    {
      key: "xero",
      src: "/rotating-icons/xero.svg",
      position: { angle: 200 },
    },
    {
      key: "sage",
      src: "/rotating-icons/sage.svg",
      position: { angle: 170 },
    },
    {
      key: "b",
      src: "/rotating-icons/b.svg",
      position: { angle: 137.5 },
    },
  ];

  const rightIcons = [
    {
      key: "whatsapp",
      src: "/rotating-icons/whatsapp.svg",
      position: { angle: 300 },
    },
    {
      key: "gmail",
      src: "/rotating-icons/gmail.svg",
      position: { angle: 335 },
    },
    {
      key: "outlook",
      src: "/rotating-icons/outlook.svg",
      position: { angle: 370 },
    },
    {
      key: "phone",
      src: "/rotating-icons/phone.svg",
      position: { angle: 405.5 },
    },
  ];

  const renderIcon = (icon: Icon) => {
    const radius = 170;
    const x = radius * Math.cos((icon.position.angle * Math.PI) / 180);
    const y = radius * Math.sin((icon.position.angle * Math.PI) / 180);

    return (
      <div
        key={icon.key}
        className="absolute"
        style={{
          transform: `translate(${x + 155}px, ${y + 155}px)`,
        }}
      >
        <div className="relative w-12 h-12">
          <Image alt={icon.key} src={icon.src} fill />
        </div>
      </div>
    );
  };

  return (
    <div className="relative flex flex-col items-center justify-center gap-8 sm:pr-0 pr-3 px-0 sm:px-6 mt-10">
      <div className="flex items-center justify-center">
        <div className="relative h-[350px] w-[350px] scale-[70%] md:scale-100">
          <div className="relative h-full rounded-full border border-gray-800">
            <div className="absolute inset-20 rounded-full bg-gradient-to-b from-[rgba(113,134,255,0.2)] via-[rgba(254,117,135,0.1)] to-[rgba(254,117,135,0.2)]" />

            {leftIcons.map(renderIcon)}

            {rightIcons.map(renderIcon)}

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
