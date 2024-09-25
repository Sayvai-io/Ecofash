"use client";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30 bg-[#609641]">
        <div className="container mx-auto">
          <h2 className="text-center mt-10 mb-15 text-4xl font-semibold">
            <span className="border-2 border-white text-white rounded-full px-4 py-1">Services</span>
            <span className="text-black ml-2">We Offer</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-5">
            <Image src="/images/service/Carbon.png" alt="Service 1" width={247} height={288} />
            <Image src="/images/service/Recycle.png" alt="Service 2" width={247} height={288} />
            <Image src="/images/service/Ecofashservices.png" alt="Service 3" width={247} height={288} />
            <Image src="/images/service/file.png" alt="Service 4" width={247} height={288} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
