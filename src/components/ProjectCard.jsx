const ProjectCard = ({
  image,
  alt,
  description,
  title,
  webpage,
  repository,
}) => {
  return (
    <>
      <div className="max-w-md rounded border bg-white min-h-80 border-gray-300 overflow-hidden shadow-lg">
        <img className="w-full" src={image} alt={alt} />
        <div className="px-6 py-4">
          <h2 className="font-bold text-strong-pink text-xl mb-2">{title}</h2>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-6 flex flex-col items-center">
          <a
            className="text-strong-pink hover:text-gray-600 hover:font-medium"
            href={repository}
          >
            Github repository
          </a>
          <a
            className="text-strong-pink hover:text-gray-600 hover:font-medium"
            href={webpage}
          >
            Web page
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
