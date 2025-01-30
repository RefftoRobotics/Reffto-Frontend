import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import RefftoLogo from "../assets/refftologo.png";

interface Brand {
  name: string;
  logo: string;
  url: string;
}

const brands: Brand[] = [

  {
    name: "Arduino",
    logo: RefftoLogo,
    url: "#",
  },
  {
    name: "Arduino",
    logo: RefftoLogo,
    url: "#",
  },
  {
    name: "Arduino",
    logo: RefftoLogo,
    url: "#",
  },
  {
    name: "Arduino",
    logo: RefftoLogo,
    url: "#",
  },
  {
    name: "Arduino",
    logo: RefftoLogo,
    url: "#",
  },
  {
    name: "Arduino",
    logo: RefftoLogo,
    url: "#",
  },
  {
    name: "Arduino",
    logo: RefftoLogo,
    url: "#",
  },
  {
    name: "Arduino",
    logo: RefftoLogo,
    url: "#",
  },
  {
    name: "Arduino",
    logo: RefftoLogo,
    url: "#",
  },
  {
    name: "Arduino",
    logo: RefftoLogo,
    url: "#",
  }
];

export default function FeaturedBrands() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-primary">
            Our Featured Brands
          </h2>
          <Link
            to="/brands"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {brands.map((brand) => (
            <motion.div
              key={brand.name}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <Link
                to={brand.url}
                className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="relative aspect-[3/2] w-full">
                  <img
                    src={brand.logo || "/placeholder.svg"}
                    alt={`${brand.name} logo`}
                    className="w-full h-full object-contain p-4 transition-transform duration-200 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
                </div>
              </Link>
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 rounded-lg opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500 group-hover:duration-200" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
