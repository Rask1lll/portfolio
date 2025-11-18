export default function ProjectCart({
  image,
  title,
  description,
  gitlink,
}: {
  image: string;
  title: string;
  description: string;
  gitlink: string;
}) {
  return (
    <div className="w-[407px] flex flex-col gap-3 p-5 bg-white rounded-2xl border-2 h-full projectCart">
      <div className="max-w-[400px] overflow-hidden">
        <img
          src={image}
          alt=""
          className="hover:scale-105 cursor-pointer duration-150 transition-transform"
        />
      </div>
      <div className="w-full text-wrap wrap-anywhere">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="w-full">{description}</p>
      </div>
      <div className="flex-1 flex items-end pl-2">
        <a href={gitlink}>
          <img src="/github-mark.png" alt="" className="w-10 h-10" />
        </a>
      </div>
    </div>
  );
}
