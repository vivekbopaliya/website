import Navbar from "@/components/navbar";
import SectionOne from "@/components/section-1";
import SectionTwo from "@/components/section-2";

export default function Home() {
  return (
    <main className="w-full h-screen p-6 ">
      <div className=" h-full   ">
        <Navbar />
        <SectionOne />
        <SectionTwo />
      </div>
    </main>
  );
}
