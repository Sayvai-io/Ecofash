import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import { supabase } from "../../supabase_config/supabaseClient";
import Image from "next/image";
import { useSelector } from "react-redux";
import translationData from "../../app/store/translation.json";
const ServiceContent = () => {
  const title = useSelector((state: any) => state.language.title);
  const language = useSelector((state: any) => state.language.language);
  const [serviceProviderData, setProviderData] = useState<{
    title: string;
    heading: string;
    content: string;
    significanceBgImage: "";
    significance: string;
    planOfAction: string;
    significanceTitle: string;
    planOfActionTitle: string;
  }>();

  useEffect(() => {
    fetchData();
  }, [language, title]);

  const fetchData = async () => {
    const { data, error } = await supabase
      .from("service_provided")
      .select("*")
      .ilike("title", title);

    if (error) {
      console.error("Error fetching service details:", error);
      return;
    } else {
      console.log("faa");
      if (language === "en") {
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
      } else {
        if (data[0].title === "<p>Cost-Effective Solutions</p>") {
          console.log("ss");
          setProviderData({
            title: translationData["Cost-Effective Solutions"],
            heading: translationData["Cost-Effective Solutions"],
            content:
              translationData[
                "Securing green funding and providing affordable sustainability audits."
              ],
            significanceBgImage: data[0].why_content_image,
            significance:
              translationData[
                "Supply chain mapping is crucial for promoting sustainability and transparency in fashion. It helps brands identify and address environmental and social impacts, leading to eco-friendly practices and greater consumer trust. This visibility into the supply chain enhances accountability by revealing the origins and production processes of products"
              ],
            planOfAction:
              "Review B Corp criteria and assess current practices.Fill out and submit the B Impact Assessment to evaluate social and environmental performance.Adjust policies and operations to meet B Corp requirements.Submit required documentation and undergo the verification process to achieve B Corp certification",
            significanceTitle: translationData["Why is it important?"],
            planOfActionTitle: translationData["What will We do?"],
          });
        } else if (data[0].title === "Freelance CSO") {
          setProviderData({
            title: translationData["Freelance CSO"],
            heading:
              translationData["Excellence through B Corp Certification."],
            content:
              translationData[
                "At Ecofash Services, we offer comprehensive guidance through on-demand strategic advice for sustainability and ESG consulting."
              ],
            significanceBgImage: data[0].why_content_image,
            significance:
              translationData[
                "Supply chain mapping is crucial for promoting sustainability and transparency in fashion. It helps brands identify and address environmental and social impacts, leading to eco-friendly practices and greater consumer trust. This visibility into the supply chain enhances accountability by revealing the origins and production processes of products"
              ],
            planOfAction:
              "Review B Corp criteria and assess current practices.Fill out and submit the B Impact Assessment to evaluate social and environmental performance.Adjust policies and operations to meet B Corp requirements.Submit required documentation and undergo the verification process to achieve B Corp certification",
            significanceTitle: translationData["Why is it important?"],
            planOfActionTitle: translationData["What will We do?"],
          });
        } else if (data[0].title === "Sustainability Outsourcing") {
          setProviderData({
            title: translationData["Sustainability Outsourcing"],
            heading:
              translationData["Outsource for a Greener, Sustainable Tomorrow."],
            content:
              translationData[
                "Outsource your sustainability needs to us and benefit from cost savings on maintaining an in-house team. We offer a full range of services, including sustainability reporting, sustainable material sourcing, and strategy development."
              ],
            significanceBgImage: data[0].why_content_image,
            significance:
              translationData[
                "Supply chain mapping is crucial for promoting sustainability and transparency in fashion. It helps brands identify and address environmental and social impacts, leading to eco-friendly practices and greater consumer trust. This visibility into the supply chain enhances accountability by revealing the origins and production processes of products"
              ],
            planOfAction:
              "Review B Corp criteria and assess current practices.Fill out and submit the B Impact Assessment to evaluate social and environmental performance.Adjust policies and operations to meet B Corp requirements.Submit required documentation and undergo the verification process to achieve B Corp certification",
            significanceTitle: translationData["Why is it important?"],
            planOfActionTitle: translationData["What will We do?"],
          });
        } else if (data[0].title === "Carbon Neutral Planning") {
          setProviderData({
            title: translationData["Carbon Neutral Planning"],
            heading:
              translationData["Charting Your Path to Carbon Neutrality."],
            content:
              translationData[
                "Achieve carbon neutrality with our comprehensive planning services. We start by assessing your current carbon footprint, evaluating emissions throughout your supply chain. Based on this assessment, we create a customized plan to reduce and offset emissions, including energy efficiency improvements and sustainable practices."
              ],
            significanceBgImage: data[0].why_content_image,
            significance:
              translationData[
                "Supply chain mapping is crucial for promoting sustainability and transparency in fashion. It helps brands identify and address environmental and social impacts, leading to eco-friendly practices and greater consumer trust. This visibility into the supply chain enhances accountability by revealing the origins and production processes of products"
              ],
            planOfAction:
              "Review B Corp criteria and assess current practices.Fill out and submit the B Impact Assessment to evaluate social and environmental performance.Adjust policies and operations to meet B Corp requirements.Submit required documentation and undergo the verification process to achieve B Corp certification",
            significanceTitle: translationData["Why is it important?"],
            planOfActionTitle: translationData["What will We do?"],
          });
        } else if (data[0].title === "Sustainable Supply Chain Mapping") {
          setProviderData({
            title: translationData["Sustainable Supply Chain Mapping"],
            heading:
              translationData[
                "Mapping Your Path to Sustainable Supply Chains."
              ],
            content:
              translationData[
                "We help you map your entire supply chain to identify areas where sustainability can be improved. Our experts work closely with you to ensure every step of your supply chain is optimized for environmental responsibility."
              ],
            significanceBgImage: data[0].why_content_image,
            significance:
              translationData[
                "Supply chain mapping is crucial for promoting sustainability and transparency in fashion. It helps brands identify and address environmental and social impacts, leading to eco-friendly practices and greater consumer trust. This visibility into the supply chain enhances accountability by revealing the origins and production processes of products"
              ],
            planOfAction:
              "Review B Corp criteria and assess current practices.Fill out and submit the B Impact Assessment to evaluate social and environmental performance.Adjust policies and operations to meet B Corp requirements.Submit required documentation and undergo the verification process to achieve B Corp certification",
            significanceTitle: translationData["Why is it important?"],
            planOfActionTitle: translationData["What will We do?"],
          });
        } else if (
          data[0].title === "Sustainability Strategy & Implementation"
        ) {
          setProviderData({
            title: translationData["Sustainability Strategy & Implementation"],
            heading:
              translationData["Empowering Solutions for a Sustainable Future."],
            content:
              translationData[
                "Supply chain mapping, decarbonization strategies, circular economy, and chemical policy creation."
              ],
            significanceBgImage: data[0].why_content_image,
            significance:
              translationData[
                "Supply chain mapping is crucial for promoting sustainability and transparency in fashion. It helps brands identify and address environmental and social impacts, leading to eco-friendly practices and greater consumer trust. This visibility into the supply chain enhances accountability by revealing the origins and production processes of products"
              ],
            planOfAction:
              "Review B Corp criteria and assess current practices.Fill out and submit the B Impact Assessment to evaluate social and environmental performance.Adjust policies and operations to meet B Corp requirements.Submit required documentation and undergo the verification process to achieve B Corp certification",
            significanceTitle: translationData["Why is it important?"],
            planOfActionTitle: translationData["What will We do?"],
          });
        } else if (data[0].title === "Circular Economy Implementation") {
          setProviderData({
            title: translationData["Circular Economy Implementation"],
            heading:
              translationData[
                "Turning Waste into Wealth with Circular Economy."
              ],
            content:
              translationData[
                "Transition to a circular economy with our expert guidance. We help you implement systems that minimize waste, enhance recycling practices, and integrate sustainability into every aspect of your business operations."
              ],
            significanceBgImage: data[0].why_content_image,
            significance:
              translationData[
                "Supply chain mapping is crucial for promoting sustainability and transparency in fashion. It helps brands identify and address environmental and social impacts, leading to eco-friendly practices and greater consumer trust. This visibility into the supply chain enhances accountability by revealing the origins and production processes of products"
              ],
            planOfAction:
              "Review B Corp criteria and assess current practices.Fill out and submit the B Impact Assessment to evaluate social and environmental performance.Adjust policies and operations to meet B Corp requirements.Submit required documentation and undergo the verification process to achieve B Corp certification",
            significanceTitle: translationData["Why is it important?"],
            planOfActionTitle: translationData["What will We do?"],
          });
        } else if (data[0].title === "Training & Capacity Building") {
          setProviderData({
            title: translationData["Training & Capacity Building"],
            heading: translationData["Training & Capacity Building"],
            content:
              translationData[
                "Educating teams and suppliers on sustainability best practices."
              ],
            significanceBgImage: data[0].why_content_image,
            significance:
              translationData[
                "Supply chain mapping is crucial for promoting sustainability and transparency in fashion. It helps brands identify and address environmental and social impacts, leading to eco-friendly practices and greater consumer trust. This visibility into the supply chain enhances accountability by revealing the origins and production processes of products"
              ],
            planOfAction:
              "Review B Corp criteria and assess current practices.Fill out and submit the B Impact Assessment to evaluate social and environmental performance.Adjust policies and operations to meet B Corp requirements.Submit required documentation and undergo the verification process to achieve B Corp certification",
            significanceTitle: translationData["Why is it important?"],
            planOfActionTitle: translationData["What will We do?"],
          });
        } else if (data[0].title === "Certification and Compliance") {
          setProviderData({
            title: translationData["Certification and Compliance"],
            heading: translationData["Certification and Compliance"],
            content:
              translationData[
                "Support for aligning with global standards like GRI, SASB, EU CSRD, SBTi, etc."
              ],
            significanceBgImage: data[0].why_content_image,
            significance:
              translationData[
                "Supply chain mapping is crucial for promoting sustainability and transparency in fashion. It helps brands identify and address environmental and social impacts, leading to eco-friendly practices and greater consumer trust. This visibility into the supply chain enhances accountability by revealing the origins and production processes of products"
              ],
            planOfAction:
              "Review B Corp criteria and assess current practices.Fill out and submit the B Impact Assessment to evaluate social and environmental performance.Adjust policies and operations to meet B Corp requirements.Submit required documentation and undergo the verification process to achieve B Corp certification",
            significanceTitle: translationData["Why is it important?"],
            planOfActionTitle: translationData["What will We do?"],
          });
        } else if (
          data[0].title === "<p>Marketing &amp; Brand Development</p>"
        ) {
          setProviderData({
            title: translationData["Marketing & Brand Development"],
            heading: translationData["Marketing & Brand Development"],
            content:
              translationData[
                "Crafting sustainability-focused brand narratives and websites."
              ],
            significanceBgImage: data[0].why_content_image,
            significance:
              translationData[
                "Supply chain mapping is crucial for promoting sustainability and transparency in fashion. It helps brands identify and address environmental and social impacts, leading to eco-friendly practices and greater consumer trust. This visibility into the supply chain enhances accountability by revealing the origins and production processes of products"
              ],
            planOfAction:
              "Review B Corp criteria and assess current practices.Fill out and submit the B Impact Assessment to evaluate social and environmental performance.Adjust policies and operations to meet B Corp requirements.Submit required documentation and undergo the verification process to achieve B Corp certification",
            significanceTitle: translationData["Why is it important?"],
            planOfActionTitle: translationData["What will We do?"],
          });
        }
      }
    }
  };

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
                      <li key={index} className="col-span-1 flex items-start">
                        <span className="mr-2 text-[#609641]">✔</span>
                        {language === "en" && (
                          <span
                            dangerouslySetInnerHTML={sanitizeHTML(sentence)}
                          ></span>
                        )}
                        {language !== "en" && (
                          <span>{translationData[`${sentence}`]}</span>
                        )}{" "}
                        {/* Sanitize planOfAction */}
                      </li>
                    ),
                )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
