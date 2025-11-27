export default function Header() {
  return (
    <header className="text-white gap-7 flex items-center flex-col w-full">
      <img
        src={import.meta.env.BASE_URL + "/hero_setup.jpg"}
        alt=""
        className="not-md:w-2xs not-md:h-2xs"
      />
      <h1 className="text-8xl not-lg:text-6xl">Welcome!</h1>
      <p className="max-w-2xl not-lg:max-w-xs text-center">
        My name is Rassul Satpekov, a front-end developer based in Astana,
        Kazakhstan. I’ve worked on several small to mid-scale front-end
        projects, focusing on building clean, functional interfaces and
        improving user experience. I enjoy working with modern web technologies,
        learning new tools, and developing interfaces that are simple,
        intuitive, and visually consistent.
      </p>
    </header>
  );
}
