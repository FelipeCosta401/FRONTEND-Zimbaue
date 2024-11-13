import MobileUserSection from "./MobileUserSection";

const Navbar = () => {
  return (
    <main className="w-full h-20 px-6 shadow-sm flex gap-4 items-center justify-between lg:hidden">
      <section className="w-1/2 ">
        <h1 className="font-extrabold hidden xs:block text-md sm:text-xl">
          Instituto
        </h1>
        <h1 className="font-black text-lg sm:text-2xl bg-gradient-to-r from-[#A99531] to-[#8E4646] bg-clip-text text-transparent uppercase">
          negro zimbauê
        </h1>
      </section>
      <MobileUserSection />
    </main>
  );
};

export default Navbar;
