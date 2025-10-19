import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
    // console.log("Tours prop:", tours);
    // console.log("Tours length:", tours?.length);
    // console.log("Is array?", Array.isArray(tours));
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
        //   console.log(tour);
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
