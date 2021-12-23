import data from "../public/assets/titleData.json";
function Cards() {
  return (
    <div className="flex justify-center">
      {data.map((d, ind) => {
        return (
          <div key={ind} className="rounded-lg shadow-lg bg-white max-w-sm p-6 mr-8">
              <img
                className="rounded-t-lg h-60 w-60 object-center"
                src={d.img}
                alt=""
              />
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">{d.title}</h5>
              <p className="text-gray-700 text-base mb-4">{d.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Cards;
