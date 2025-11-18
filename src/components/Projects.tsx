import ProjectCart from "./ProjectCart";

const projects = [
  {
    image: "/Screenshot 2025-11-18 at 21.00.33.png",
    title: "Test",
    desc: "lorem loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
  },
  {
    image: "/Screenshot 2025-11-18 at 21.00.33.png",
    title: "Test",
    desc: "lorem loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
  },
  {
    image: "/Screenshot 2025-11-18 at 21.00.33.png",
    title: "Test",
    desc: "lorem loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloreloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloreloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloreloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
  },
];

export default function Projects() {
  return (
    <div className="flex justify-center">
      <div className="projectContainer p-7 rounded-4xl gap-7 w-fit grid grid-cols-2 xl:grid-cols-3">
        {projects.map((el) => {
          return (
            <ProjectCart
              title={el.title}
              image={el.image}
              description={el.desc}
              gitlink=""
            />
          );
        })}
      </div>
    </div>
  );
}
