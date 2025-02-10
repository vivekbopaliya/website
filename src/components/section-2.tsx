import Image from "next/image";
import Link from "next/link";

export default function SectionTwo() {
  return (
    <main className="relative min-h-[200px] flex gap-7 flex-col text-center items-center py-32">
      <div className="relative z-10 flex flex-col items-center gap-7">
        <p className="font-bold text-4xl tracking-normal">
          Struggling to get Paid on Time?
        </p>

        <p className="font-extralight text-md tracking-wide text-center">
          Our Accounts Receivables Agent automates your collection process from
          collection to cash application
        </p>

        <Link
        target="_blank"
          href="https://calendly.com/aditya-be0y/demo?month=2024-04"
          className="inline-flex w-5/12  text-md h-14 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Book a Demo
        </Link>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <Image
          src="/assets/section-2-effect.svg"
          height={400}
          width={1280}
          alt="effect"
        />
      </div>
    </main>
  );
}
