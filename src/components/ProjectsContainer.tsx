import Projects from "./Projects";

export default function ProjectsContainer() {
  return (
    <div className="w-full  rounded-t-[500px] mt-20">
      <svg
        className="bg-white"
        viewBox="0 0 1440 79"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M-100 79C-100 79 218.416 23.165 693.5 23.165C1168.58 23.165 1487 79 1487 79V0H-100V79Z"></path>
      </svg>
      <main className="bg-white">
        <div className="text-center">
          <h1 className=" text-5xl font-bold">My projects</h1>
          <p>The collection of my work</p>
          <Projects />
        </div>
      </main>
    </div>
  );
}
