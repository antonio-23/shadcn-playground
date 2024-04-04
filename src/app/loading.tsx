import Navbar from "@/components/Navbar";
import SkeletonCard from "@/components/SkeletonCard";

export default function loading() {
  return (
    <>
      <Navbar />
      <main>
        <div className='grid grid-cols-3 gap-8'>
          {Array.from({ length: 9 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </main>
    </>
  );
}
