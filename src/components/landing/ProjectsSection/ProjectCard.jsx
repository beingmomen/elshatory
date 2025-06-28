function ProjectCard(props) {
  return (
    <div className="ring-1 ring-gray-600 p-5 rounded-md bg-gray-900 hover:-mt-3 hover:mb-3 transition-all duration-300 ease-in-out hover:ring-sky-900 hover:ring-2">
      <img
        className=" aspect-3/2 rounded-md"
        src={props.project.img}
        alt={props.project.altText}
      />
      <p className="text-base text-gray-400 mt-4">#{props.project.tag}</p>
      <h4 className="text-4xl font-bold text-white mt-5 cursor-pointer hover:text-sky-400 transition duration-300 ease-in-out">
        {props.project.title}
      </h4>
      <div className="flex flex-wrap gap-4 mt-4">
        {props.project.tags.map((tag) => (
          <span className="bg-sky-400 text-sm font-bold px-2 py-1 rounded-md">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
