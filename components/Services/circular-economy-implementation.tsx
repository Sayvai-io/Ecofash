"use client";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { supabase } from "../../supabase_config/supabaseClient";
import Link from "next/link";

const CircularEconomyImplementation = () => {
  const pathname = usePathname();
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();
  const isInitialRender = useRef(true);
  const [email, setEmail] = useState("");
  const [serviceProviderData, setProviderData] = useState<{
    title: string;
    heading: "";
    content: "";
    significanceBgImage: "";
    significance: "";
    planOfAction: "";
    significanceTitle: "";
    planOfActionTitle: "";
  }>();
  const fetchProviderData = async () => {
    const { data, error } = await supabase
      .from("seperate_service")
      .select("*")
      .eq("title", "Circular Economy Implementation");
    if (error) {
      console.error("Error fetching service data details:", error);
    } else {
      setProviderData({
        title: data[0].title,
        heading: data[0].heading,
        content: data[0].content,
        significanceBgImage: data[0].why_content_image,
        significance: data[0].significance,
        planOfAction: data[0].plan_of_action,
        significanceTitle: data[0].significance_title,
        planOfActionTitle: data[0].plan_of_action_title,
      });
    }
  };

  useEffect(() => {
    if (isInitialRender.current) {
      fetchProviderData();
      isInitialRender.current = false;
      setHasMounted(true);
    }
  }, []);

  if (!hasMounted) {
    return null;
  }
  const navigateToContact = () => {
    if (hasMounted) {
      router.push("/contact");
    }
    // Change '/contact' to the desired route
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const ServiceLink = ({ href, children }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={`flex items-center text-lg font-semibold ${
          isActive ? "text-[#609641]" : "hover:text-[#609641]"
        } border-b-2 border-gray-200 pb-4`}
      >
        <span className="mr-2 hidden group-hover:inline-block">{"<"}</span>
        {children}
      </Link>
    );
  };

  return (
    <>
      <section className="relative -mt-14 overflow-hidden py-16 sm:-mt-10 sm:py-20 md:-mt-12 md:py-28 lg:-mt-14 lg:py-32 xl:-mt-14 xl:py-44">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/service/service-hero.jpg"
            alt="Supply Chain Mapping"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
          <div className="rounded-sm border-l-8 border-[#609641] px-5">
            <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              <span className="mb-4 block">
                Transforming <span className="text-[#609641]">Fashion</span>{" "}
                with Ethical
              </span>
              and <span className="text-[#609641]">Sustainable</span> Practices
            </h1>
          </div>
          <div className="mt-8 flex space-x-4">
            <button className="rounded-lg bg-white px-6 py-2 font-semibold text-black transition duration-300 hover:bg-gray-100">
              Get Started
            </button>
            <button
              onClick={navigateToContact}
              className="rounded-lg border-2 border-white px-6 py-2 font-semibold text-white transition duration-300 hover:bg-white hover:text-black"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28 lg:py-32 xl:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
          <div className="flex flex-wrap">
            {/* Left side content */}
            <div className="mb-8 w-full pr-8 lg:mb-0 lg:w-1/3">
              {/* Service Links */}
              <div className="mb-12">
                <h2 className="mb-6 text-4xl font-bold text-[#0d0e0d]">
                  Services
                </h2>
                <ul className="space-y-4">
                  <li>
                    <ServiceLink href="/service/supply-chain-mapping">
                      Supply Chain Mapping
                    </ServiceLink>
                  </li>
                  <li>
                    <ServiceLink href="/service/b-corp-certification">
                      B Corp Certification
                    </ServiceLink>
                  </li>
                  <li>
                    <ServiceLink href="/service/carbon-neutral-planning">
                      Carbon Neutral Planning
                    </ServiceLink>
                  </li>
                  <li>
                    <ServiceLink href="/service/circular-economy-implementation">
                      Circular Economy Implementation
                    </ServiceLink>
                  </li>
                  <li>
                    <ServiceLink href="/service/sustainability-outsourcing">
                      Sustainability Outsourcing
                    </ServiceLink>
                  </li>
                  <li>
                    <ServiceLink href="/service/other-services">
                      Other Services
                    </ServiceLink>
                  </li>
                </ul>
              </div>

              {/* Image */}
              <div className="rounded-lg bg-[#F3F3F3]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-8 w-full"
                >
                  <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                    <Image
                      src="/images/about/about-image.png"
                      alt=""
                      fill
                      className="border-none object-cover"
                    />
                    <Image
                      src="/images/about/about-image-dark.svg"
                      alt=""
                      fill
                      className="hidden object-cover dark:block"
                    />
                  </div>
                </motion.div>

                {/* Text content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h2 className="mb-2 text-3xl font-bold text-black dark:text-black xl:text-xl">
                    Let's make things happen
                  </h2>
                  <p className="text-body-color mx-auto mb-4 max-w-2xl p-4 text-sm font-medium leading-relaxed">
                    Contact us today to learn more about how our services can
                    help your business grow sustainably and make a difference.
                  </p>
                  <a
                    href="/contact"
                    className="mb-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#609641] px-6 py-2 font-medium text-white hover:opacity-90"
                  >
                    contact us
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Right side content */}
            <div className="w-full pl-4 lg:w-2/3">
              <h2 className="mb-6 text-5xl font-extrabold text-[#609641]">
                {serviceProviderData?.heading}
              </h2>
              <p className="mb-4">{serviceProviderData?.content}</p>

              <div className="flex flex-wrap">
                <div className="w-full pr-4 lg:w-1/2">
                  <h3 className="mb-4 text-3xl font-bold">
                    {serviceProviderData?.significanceTitle}
                  </h3>
                  <p className="mb-8">{serviceProviderData?.significance}</p>
                </div>
                <div className="w-full pl-4 lg:w-1/2">
                  <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                    {serviceProviderData?.significanceBgImage && (
                      <Image
                        src={serviceProviderData?.significanceBgImage ?? ""}
                        alt="Service Hero"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="mb-4 text-3xl font-bold">
                  {serviceProviderData?.planOfActionTitle}
                </h3>
                <div className="-mx-4 flex flex-wrap">
                  <div className="!w-full px-4 lg:w-1/2">
                    <ul className="grid !w-full list-none grid-cols-2 items-center space-y-4">
                      {serviceProviderData?.planOfAction
                        .split(".")
                        .filter((sentence) => sentence.trim() !== "")
                        .map((sentence, index) => (
                          <li
                            key={index}
                            className="col-span-1 flex items-start"
                          >
                            <span className="mr-2 text-[#609641]">✔</span>
                            <span>{sentence}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CircularEconomyImplementation;
