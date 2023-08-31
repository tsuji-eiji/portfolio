import Link from "next/link";
import Image from "next/image";
import { getWorks } from "../../libs/client";

export default async function Work() {
  const { contents } = await getWorks();

  if (!contents || contents.length === 0) {
    return <h2>No contents</h2>;
  }

  return (
    <div>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-4">
        {contents.map((work) => {
          return (
            <li key={work.id} className="block m-4 p-8 bg-gray-200">
              <Image
                key={work.id}
                src={work.img.url}
                alt={work.text}
                width={900}
                height={450}
                id={work.id}
              />
              <p key={work.id} className="my-8">{work.text}</p>
              <div key={work.id} className="border border-black text-center bg-white">
                <Link
                  key={work.id}
                  href={work.url}
                  target="_blank"
                  className="block w-full"
                >
                  Link
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
