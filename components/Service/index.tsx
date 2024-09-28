"use client";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <section className="overflow-hidden bg-[#609641] pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="container mx-auto">
          <h2 className="mb-15 mt-10 text-center text-4xl font-semibold">
            <span className="rounded-full border-2 border-white px-4 py-1 text-white">
              Services
            </span>
            <span className="ml-2 text-black">We Offer</span>
          </h2>
          <div className="grid grid-cols-4  gap-4">
            <div className="col-span-4 justify-self-center md:col-span-2 lg:col-span-1">
              <Image
                src="/images/service/Carbon.png"
                alt="Service 1"
                width={247}
                height={288}
              />
            </div>
            <div className="col-span-4 justify-self-center md:col-span-2 lg:col-span-1">
              <Image
                className="col-span-4 md:col-span-2 lg:col-span-1"
                src="/images/service/Recycle.png"
                alt="Service 2"
                width={247}
                height={288}
              />
            </div>
            <div className="col-span-4 justify-self-center md:col-span-2 lg:col-span-1">
              <Image
                className="col-span-4 md:col-span-2 lg:col-span-1"
                src="/images/service/Ecofashservices.png"
                alt="Service 3"
                width={247}
                height={288}
              />
            </div>
            <div className="col-span-4 justify-self-center md:col-span-2 lg:col-span-1">
              <Image
                className="col-span-4 md:col-span-2 lg:col-span-1"
                src="/images/service/file.png"
                alt="Service 4"
                width={247}
                height={288}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
