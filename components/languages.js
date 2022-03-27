import StarRatings from "react-star-ratings";
import data from "/public/assets/titleData.json";
function Languages() {
  return (
    <div className="flex justify-center">
      {data.map((d, ind) => {
        return (
          <div
            key={ind}
            className="rounded-lg shadow-lg bg-white max-w-sm p-6 mr-8"
          >
            <img
              className="rounded-t-lg h-60 w-60 mx-auto object-center"
              src={d.img}
              alt=""
            />
            <div className="p-6">
              <h5 className="text-gray-900 text-3xl font-bold mb-2">
                {d.title}
              </h5>
              <StarRatings
                  rating={d.rating}
                  starRatedColor="gold"
                  starDimension="40px"
                  starSpacing="6px"
                />
              <p className="text-gray-700 text-base mb-4 mt-6">{d.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Languages;
