import Categories from "./Categories";

function Cards(props) {
  return (
    <div>
      <div className="container mx-auto my-2 p-2 mb-20">
        <h1 className="mb-4 lg:text-4xl text-3xl text-center">{props.title}</h1>
        <div className="cards px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <Categories title="Hair" img={props.img1} />
            <Categories title="Whipped Soaps" img={props.img2} />
            <Categories title="Soaps" img={props.img3} />
            <Categories title="Face" img={props.img4} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
