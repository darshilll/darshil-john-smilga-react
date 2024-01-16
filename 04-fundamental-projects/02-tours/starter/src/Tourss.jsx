import Tour from "./Tour";

const Tourss = ({ tourData , removeTour}) => {
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tour">
        {tourData.map((tour)=>{
            return<Tour key={tour.id} {...tour} removeTour={removeTour}/>
        })}
      </div>
    </section>
  );
};
export default Tourss;
