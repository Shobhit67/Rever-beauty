
function Categories(props) {
  return (
    <>
      <div className="max-w-md mx-auto bg-transparent shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-64 object-cover"
          src={props.img}
          alt="Card"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {props.title}
          </h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            pretium libero at lectus pretium, eu interdum tortor maximus.
          </p>
          <button className="py-2 px-4 border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white rounded">
            View More
          </button>
        </div>
      </div>
    </>
  );
}

export default Categories;
