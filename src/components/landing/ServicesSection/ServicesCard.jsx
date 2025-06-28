function ServicesCard(props) {
  return (
    <div className=" ring-1 ring-gray-600 p-5 rounded-md bg-gray-900 hover:-mt-3 hover:mb-3 transition-all duration-300 ease-in-out hover:ring-sky-900 hover:ring-2">
      <img
        className="w-[300px] aspect-3/2 rounded-md"
        src={props.service.image}
        alt={props.service.title}
      />
      <h4 className="text-2xl font-bold text-sky-400 mt-5">
        {props.service.title}
      </h4>
      <p className="mt-5 text-xl text-white">{props.service.description}</p>
    </div>
  );
}

export default ServicesCard;
