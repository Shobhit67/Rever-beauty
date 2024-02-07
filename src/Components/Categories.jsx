import HairAmlaImg1 from "../images/HAIR/amla Ritha sikkai shampoo/img1.jpg";

function Categories(props) {
  return (
    <>
      <div className="rounded overflow-hidden shadow-lg border-2 border-gray-300 card m-4">
        <div className="flex flex-col p-4 px-12 py-6 justify-start ">
          <div className="my-2 ">
            <img
              className="category-img rounded-md"
              src={HairAmlaImg1}
              alt="Placeholder"
            />
          </div>

          <div className="my-2">
            <div className="font-bold text-xl mb-2">{props.title}</div>
            <p className="text-gray-700 text-base">
              I was impressed by the molding services, not lorem ipsum is simply
              free text.
            </p>
          </div>
          <div className="py-2 text-center border border-yellow-300 rounded">
            <button type="submit">Buy now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
