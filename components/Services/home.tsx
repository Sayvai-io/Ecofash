import { FaArrowRight } from "react-icons/fa";

const ServicesHome = () => {
  return (
    <div className="flex flex-col items-center justify-between px-4 py-12 md:flex-row md:px-8">
      <div className="mb-8 md:mb-0 md:w-1/2">
        <h2 className="mb-4 text-3xl font-bold">
          Guiding Brands to a{" "}
          <span className="text-3xl font-bold text-[#609641]">Greener</span>{" "}
          Future
        </h2>
      </div>
      <div className="md:w-1/2">
        <p className="mb-4">
          Founded in 2020, Ecofash Services emerged from a deep commitment to
          revolutionize the fashion industry, placing sustainability and ethics
          at the forefront of our mission. What began as a small initiative
          driven by passion and a vision for change quickly evolved into
        </p>
        <button className="flex items-center text-black hover:underline">
          Our Services <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ServicesHome;
