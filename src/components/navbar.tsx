import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="">
      <div className="flex justify-between align-middle w-full">
        <div className="flex  items-center justify-center gap-2">
          <Image
            src="/assets/simple-ar-logo.svg"
            alt="Simple AR"
            height={31}
            width={26}
          />
          <p className="font-bold text-xl  tracking-normal text-center">
            Simple AR
          </p>{" "}
        </div>
        <Link
          href="https://calendly.com/aditya-be0y/demo?month=2024-04"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#7286FF_0%,#FE7587_50%,#7286FF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Get paid on Time
          </span>
        </Link>
      </div>
    </div>
  );
}
