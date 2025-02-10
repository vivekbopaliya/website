import Image from "next/image";
import RotatingIcons from "./rotating-icons";
import TextInfoSection from "./text-info-section";
import Link from "next/link";

export default function SectionOne() {
  return (
    <main className="flex gap-7 flex-col text-center items-center pt-24 overflow-hidden relative">
      <div className="relative z-10 flex flex-col gap-7">
        <div className="flex gap-4 flex-col">
          <p className="font-bold text-5xl tracking-normal">
            Automate Your Accounts Receivables
          </p>
          <p className="font-bold text-5xl tracking-normal bg-gradient-to-r from-[#7186FF] via-[#FE7587] to-[#FE7587] text-transparent bg-clip-text">
            Your Collections on Autopilot
          </p>
        </div>

        <p className="font-extralight text-sm tracking-normal text-center">
          Simplify accounts receivable management by automating collection,
          reconciliation, and billing helping you save on <br /> labor costs and
          improve cash flow efficiency.
        </p>

        <Link
          href="https://calendly.com/aditya-be0y/demo?month=2024-04"
          className="relative mx-auto w-44 inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#7286FF_0%,#FE7587_50%,#7286FF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-md font-medium text-white backdrop-blur-3xl">
            Get paid on Time
          </span>
        </Link>
      </div>

      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30">
        <Image
          src="/assets/section-1-effect.png"
          height={465}
          width={1400}
          alt="section effect"
        />
      </div>

      <div className="relative z-10 flex justify-around items-center flex-wrap pt-32 pb-20 w-full">
        <TextInfoSection />
        <RotatingIcons />
      </div>
    </main>
  );
}
