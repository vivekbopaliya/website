import Image from "next/image";
import RotatingIcons from "./rotating-icons";
import TextInfoSection from "./text-info-section";
import Link from "next/link";

export default function SectionOne() {
  return (
    <main className="flex gap-7 flex-col text-center items-center pt-12 sm:pt-24 overflow-hidden relative px-0 sm:px-6">
      <div className="relative z-10 flex flex-col gap-7">
        <div className="sm:flex hidden gap-4 flex-col">
          <p className="font-bold text-4xl sm:text-6xl tracking-normal">
            Automate Your Accounts Receivables
          </p>
          <p className="font-bold text-4xl sm:text-6xl tracking-normal bg-gradient-to-r from-[#7186FF] via-[#FE7587] to-[#FE7587] text-transparent bg-clip-text">
            Your Collections on Autopilot
          </p>
        </div>
        <div className="flex sm:hidden gap-4 flex-col">
          <p className="font-bold text-2xl sm:text-5xl tracking-normal">
            Automate Your Accounts Receivables <br />
            <span className="font-bold text-2xl sm:text-5xl tracking-normal bg-gradient-to-r from-[#7186FF] via-[#FE7587] to-[#FE7587] text-transparent bg-clip-text">
              Your Collections on Autopilot
            </span>
          </p>
        </div>

        <p className="font-thin text-xs sm:text-lg tracking-normal text-center px-4">
          Simplify accounts receivable management by automating collection,
          reconciliation, and billing helping you save on <br /> labor costs and
          improve cash flow efficiency.
        </p>

        <Link
          target="_blank"
          href="https://calendly.com/aditya-be0y/demo?month=2024-04"
          className="relative mx-auto w-36 sm:w-52 inline-flex h-8 sm:h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#7286FF_0%,#FE7587_50%,#7286FF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 sm:px-6 py-1 text-xs sm:text-lg font-medium text-white backdrop-blur-3xl">
            Get paid on Time
          </span>
        </Link>
      </div>

      <div className="absolute sm:top-[30%] top-[14%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 sm:opacity-30">
        <Image
          src="/assets/section-1-effect.png"
          height={465}
          width={1400}
          alt="section effect"
          className="w-full max-w-[1400px]"
        />
      </div>

      <hr className="sm:w-4/6 w-5/6  border-t border-gray-300 mt-20 pb-20 opacity-30 sm:opacity-20" />
      <div className="relative z-10 flex flex-col sm:flex-row justify-around items-center sm:pb-4 pb-14  w-full gap-12 sm:gap-0">
        <TextInfoSection />
        <RotatingIcons />
      </div>
    </main>
  );
}
