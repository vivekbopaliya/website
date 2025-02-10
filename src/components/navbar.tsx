import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center w-full py-4">
        <Link href='/' className="flex items-center justify-center gap-2">
          <Image
            src="/assets/simple-ar-logo.svg"
            alt="Simple AR"
            height={31}
            width={26}
          />
          <p className="font-bold text-lg sm:text-xl tracking-normal text-center">
            Simple AR
          </p>
        </Link>
        <Link
          target="_blank"
          href="https://calendly.com/aditya-be0y/demo?month=2024-04"
          className="relative inline-flex h-8 sm:h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#7286FF_0%,#FE7587_50%,#7286FF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium text-white backdrop-blur-3xl">
            Get paid on Time
          </span>
        </Link>
      </div>
    </div>
  );
}