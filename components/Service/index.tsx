"use client";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30 bg-[#609641]">
        <div className="container mx-auto">
          <h2 className="text-center mt-10 mb-15 text-4xl font-semibold">
            <span className="border-2 border-white text-white rounded-full px-4 py-1">Services</span>
            <span className="text-black ml-2">We Offers</span>
          </h2>
          <div className="flex justify-center items-center space-x-4">
            <Image src="/images/service/Service1.jpg" alt="Service 1" width={247} height={288} className="rounded-2xl" />
            <Image src="/images/service/Service2.jpg" alt="Service 2" width={247} height={288} className="rounded-2xl" />
            <Image src="/images/service/Service3.jpg" alt="Service 3" width={247} height={288} className="rounded-2xl" />
            <Image src="/images/service/Service4.jpg" alt="Service 4" width={247} height={288} className="rounded-2xl" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
