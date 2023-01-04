import Image from "next/image";
import NotFound from "../../not-found";


const getData = async (id) => {
  const result = await fetch(`http://moviesapi.ir/api/v1/movies/${id}`, {
    caches: "no-store",
  });
  return result.json();
};

const Single = async ({ params }) => {
  const data = await getData(params.id);
    console.log(data);
    if (!data.id) {
        return NotFound()
    };
    

  return (
    <div className="container mx-auto">
      <section className="flex justify-between items-start p-5 mt-2 rounded-lg bg-zinc-200">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h1 className="text-xl">{data.title}</h1>
            <div> director :{data.director}</div>
            <div>actors :{data.actors}</div>
            <div> year :{data.year}</div>
            <div>IMDB :{data.imdb_rating}</div>
            <div>time :{data.runtime}</div>
            <div className="flex justify-start items-center flex-wrap gap-4 text-white">
              {data.genres.map((g, i) => (
                <div key={i} className="bg-yellow-900 rounded-md py-4 px-2">
                  {g}
                </div>
              ))}
            </div>
          </div>
          <div className="px-2 ">
            <div className="m-1">
              plot : <div className="m-1">{data.plot}</div>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="rounded-lg"
            width={250}
            height={300}
            alt={data.title}
            src={data.poster}
          />
        </div>
      </section>
      <section className="flex justify-around items-center my-4 flex-wrap">
        {data.images.map((img, i) => (
          <Image
            key={i}
            className="rounded-lg my-4"
            width={400}
            height={200}
            alt={data.title}
            src={img}
          />
        ))}
      </section>
    </div>
  );
};

export default Single;
