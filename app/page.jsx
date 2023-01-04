import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const result = await fetch("http://moviesapi.ir/api/v1/movies?page={page}", {
    caches: "no-store",
  });
  return result.json();
};

const Home = async () => {
  const data = await getData();
  return (
    <>
      <main className="flex flex-col container gap-5 mx-auto">        
        <div className="text-blue-500 text-center text-2xl mt-3">Movies</div>
        <div className="flex justify-between items-center flex-wrap">
          {data.data.map((m, i) => (
            <Link
              href={`/movies/${m.id}`}
              className="my-4 p-4 border-2 h-[28rem] w-72 border-zinc-300 rounded-2xl"
              key={i}
            >
              <div className="flex justify-center items-center">
                <Image
                  className="rounded-lg"
                  width={225}
                  height={200}
                  alt={m.title}
                  src={m.poster}
                />
              </div>              
                <h2 className="m-2 mt-2 text-center text-bold">{m.title}</h2>
                <div className="flex justify-between items-center ">
                  <div className="mx-2">{m.year}</div>
                  <div className="mx-2">{m.genres}</div>
                </div>              
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
