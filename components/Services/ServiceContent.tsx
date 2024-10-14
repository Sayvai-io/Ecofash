import React,{useState,useEffect} from 'react';
import DOMPurify from "dompurify";
import { supabase } from "../../supabase_config/supabaseClient";
import Image from "next/image";
import { useSelector } from "react-redux";



const ServiceContent=()=> {
    const title=useSelector((state:any)=>state.language.title)
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

    useEffect(() => {
        fetchData();
    },[title])

    const fetchData= async () => {
        const { data, error } = await supabase
            .from("service_provided")
            .select("*")
            .ilike("title", title); 

        if (error) {
            console.error("Error fetching service details:", error);
            return;
        }
        else{
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

    }

    const sanitizeHTML = (html: string) => {
        // {{ edit_2 }}
        return {
          __html: DOMPurify.sanitize(html),
        };
      };

  return (
        <div className="w-full pl-4 lg:w-2/3">
              <h2
                className="mb-6 text-5xl font-extrabold text-[#609641]"
                dangerouslySetInnerHTML={sanitizeHTML(
                  serviceProviderData?.heading ?? "",
                )}
              ></h2>
              <p
                className="mb-4"
                dangerouslySetInnerHTML={sanitizeHTML(
                  serviceProviderData?.content ?? "",
                )}
              ></p>{" "}
              {/* Sanitize content */}
              <div className="flex flex-wrap">
                <div className="w-full pr-4 lg:w-1/2">
                  <h3
                    className="mb-4 text-3xl font-bold"
                    dangerouslySetInnerHTML={sanitizeHTML(
                      serviceProviderData?.significanceTitle ?? "",
                    )}
                  ></h3>
                  <p
                    className="mb-8"
                    dangerouslySetInnerHTML={sanitizeHTML(
                      serviceProviderData?.significance ?? "",
                    )}
                  ></p>{" "}
                  {/* Sanitize significance */}
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
                <h3
                  className="mb-4 text-3xl font-bold"
                  dangerouslySetInnerHTML={sanitizeHTML(
                    serviceProviderData?.planOfActionTitle ?? "",
                  )}
                ></h3>
                <div className="-mx-4 flex flex-wrap">
                  <div className="!w-full px-4 lg:w-1/2">
                    <ul className="grid !w-full list-none grid-cols-2 items-center space-y-4">
                      {serviceProviderData?.planOfAction
                        .split(".")
                        .filter((sentence) => sentence.trim() !== "")
                        .map(
                          (sentence, index) =>
                            sanitizeHTML(sentence).__html !== "" && (
                              <li
                                key={index}
                                className="col-span-1 flex items-start"
                              >
                                <span className="mr-2 text-[#609641]">✔</span>
                                <span
                                  dangerouslySetInnerHTML={sanitizeHTML(
                                    sentence,
                                  )}
                                ></span>{" "}
                                {/* Sanitize planOfAction */}
                              </li>
                            ),
                        )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default ServiceContent