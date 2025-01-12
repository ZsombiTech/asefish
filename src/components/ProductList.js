import bot from "../images/bot.webp";
import { Link } from "react-router-dom";
const products = [
  {
    id: 2,
    name: "Horgaszbot 2",
    href: "#",
    imageSrc: bot,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    newprice: "$25",
  },
  {
    id: 2,
    name: "Horgaszbot 2",
    href: "#",
    imageSrc: bot,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    newprice: "$25",
  },
  {
    id: 2,
    name: "Horgaszbot 2",
    href: "#",
    imageSrc: bot,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    newprice: "$25",
  },
  {
    id: 2,
    name: "Horgaszbot 2",
    href: "#",
    imageSrc: bot,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    newprice: "$25",
  },
  {
    id: 2,
    name: "Horgaszbot 2",
    href: "#",
    imageSrc: bot,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    newprice: "$25",
  },
  {
    id: 2,
    name: "Horgaszbot 2",
    href: "#",
    imageSrc: bot,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    newprice: "$25",
  },
  {
    id: 2,
    name: "Horgaszbot 2",
    href: "#",
    imageSrc: bot,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    newprice: "$25",
  },
  {
    id: 2,
    name: "Horgaszbot 2",
    href: "#",
    imageSrc: bot,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    newprice: "$25",
  },
  {
    id: 2,
    name: "Horgaszbot 2",
    href: "#",
    imageSrc: bot,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    newprice: "$25",
  },
  {
    id: 2,
    name: "Horgaszbot 2",
    href: "#",
    imageSrc: bot,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    newprice: "$25",
  },
  {
    id: 2,
    name: "Horgaszbot 2",
    href: "#",
    imageSrc: bot,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    newprice: "$25",
  },
];

export default function List() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center mb-13">
          Horgászbotok
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link to="/productoverview">
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
