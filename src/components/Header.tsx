export default function Header() {
  return (
    <header className="text-white gap-7 flex items-center flex-col w-full">
      <img src="/hero_setup.jpg" alt="" className="not-md:w-2xs not-md:h-2xs" />
      <h1 className="text-8xl not-lg:text-6xl">Welcome!</h1>
      <p className="max-w-2xl not-lg:max-w-xs text-center">
        My name is Ian Dunkerley, a front-end developer based in Torquay, Devon,
        UK. I have worked on a wide range of front-end projects, from DJ
        applications to eCommerce booking platforms, with a focus on creating
        clean, well-crafted interfaces that not only look great but also provide
        a seamless user experience.
      </p>
    </header>
  );
}
