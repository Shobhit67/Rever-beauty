import HairAmlaImg1 from "../images/HAIR/amla Ritha sikkai shampoo/img1.jpg";

function Categories(props) {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-red-300 border">
      <div className="p-20 text-center">
        <img className="w-20 rounded-full mb-8" src={HairAmlaImg1} alt="Placeholder" />
        
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <p className="text-gray-700 text-base">
          I was impressed by the molding services, not lorem ipsum is simply
          free text.
        </p>
      </div>
      <div className="py-4 bg-yellow-400 text-center rounded-full mb-12 ml-20 mr-20">
        <button type="submit">Buy now</button>
      </div>
    </div>
  );
}

export default Categories;
