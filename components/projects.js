import Image from "next/image";
import data from "/public/assets/projectsData.json";
function Projects() {
  return (
    <div className="flex flex-wrap row-gap-1 col-gap-1 flex-row">
      {data.map((d, ind) => {
        return (
          <div
            key={ind}
            style={{width: "45%"}}
            className="rounded-lg shadow-lg bg-white p-6 mr-8"
          >
            <a key={ind} href={d.link} target="_blank" rel="noreferrer">
              <img
                className="rounded-t-lg h-60 m-0 object-center"
                src={d.img}
                alt={d.title}
              />
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  {d.title}
                </h5>                
                <p className="text-gray-700 text-base mb-4">{d.description}</p>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}
export default Projects;
