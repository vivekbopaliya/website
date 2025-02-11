import Image from "next/image";
import Link from "next/link";

export default function SectionTwo() {
  return (
    <main className="relative min-h-[240px] flex gap-7 flex-col text-center items-center py-16 sm:py-32 px-0 sm:px-6 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center gap-7">
        <p className="font-bold text-3xl sm:text-4xl tracking-normal text-center">
          Struggling to get Paid on Time?
        </p>

        <p className="font-extralight text-xs sm:text-lg tracking-wide text-center px-4">
          Our Accounts Receivables Agent automates your collection process from
          collection to cash application
        </p>

        <Link
          target="_blank"
          href="https://calendly.com/aditya-be0y/demo?month=2024-04"
          className="inline-flex w-full sm:w-5/12 text-xs sm:text-lg h-10 sm:h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 sm:px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Book a Demo
        </Link>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full">
        <div className="relative w-full sm:h-[600px] h-[250px]">
          <Image
            src="/assets/section-2-effect.svg"
            alt="effect"
            fill
            className="object-cover object-center "
            priority
          />
        </div>
      </div>
    </main>
  );
}