"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/supabase_config/supabaseClient";
import DOMPurify from "dompurify";

const fetchAddress = async () => {
  const { data, error } = await supabase
    .from("address")
    .select(`full_address,email, contact_no, country(country_name)`);
  if (error) {
    console.error("Error fetching data ", error);
    return null;
  }
  return data;
};

const sanitizeHTML = (html: string) => {
  return {
    __html: DOMPurify.sanitize(html),
  };
};

const stripHTML = (htmlString: string) => {
  const sanitized = DOMPurify.sanitize(htmlString);
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = sanitized;
  return tempDiv.textContent || tempDiv.innerText || ""; // Get inner text
};

const Address = () => {
  const [indiaAddresses, setIndiaAddresses] = useState<any>([]);
  const [globalAddresses, setGlobalAddresses] = useState<any>([]);
  const [activeTab, setActiveTab] = useState<"india" | "global">("india");

  useEffect(() => {
    const getData = async () => {
      const getAddressData = await fetchAddress();

      const indiaAddressData = getAddressData?.filter((item: any) => {
        const countryName = stripHTML(item.country.country_name);
        return countryName.trim().toLowerCase() === "india";
      });
      const acrossGlobeAddresses = getAddressData?.filter((item: any) => {
        const countryName = stripHTML(item.country.country_name);
        return countryName.trim().toLowerCase() !== "india";
      });
      setIndiaAddresses(indiaAddressData);
      setGlobalAddresses(acrossGlobeAddresses);
    };
    getData();
  }, []);

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-[#609641] text-center mb-8">Our Offices Across the Global</h1>
      <div className="flex justify-center">
            <button
              className={`px-4 py-2 text-gray-500 hover:text-[#609641]  focus:text-[#609641]  font-semibold rounded-t-md ${activeTab === "india" ? "text-[#609641] border-t-2  border-[#609641] bg-white " : ""}`}
              onClick={() => setActiveTab("india")}
            >
              India
            </button>
            <button
              className={`px-4 py-2 text-gray-500 hover:text-[#609641] border-t-2 border-transparent hover:border-[#609641] focus:text-[#609641] focus:border-[#609641] font-semibold rounded-t-md ${activeTab === "global" ? "text-[#609641] border-[#609641] bg-white" : ""}`}
              onClick={() => setActiveTab("global")}
            >
              Global Offices
            </button>
          </div>
      <div className="flex flex-col md:flex-row">
        {/* Map Section */}
        <div className="w-full md:w-3/4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8587885072996!2d72.86852331523638!3d19.106680687078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c82b5b5b5b5b%3A0x2a2a2a2a2a2a2a2a!2sYour%20Location!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            className="rounded-t-lg md:rounded-l-lg"
          ></iframe>
        </div>

        {/* Address Section */}
        <div className="w-full md:w-2/6 bg-[#609641] text-white p-6 rounded-b-lg md:rounded-r-lg">
         

          <h2 className="text-2xl font-bold mb-4">{activeTab === "india" ? "India Office" : "Global Offices"}</h2>
          <div className="space-y-6">
            {activeTab === "india" &&
              indiaAddresses.map((item, index) => (
                <ul key={index} className="text-lg">
                  <li dangerouslySetInnerHTML={sanitizeHTML(`${item.full_address}`)}></li>
                  <li dangerouslySetInnerHTML={sanitizeHTML(`${item.email}`)}></li>
                  <li dangerouslySetInnerHTML={sanitizeHTML(`${item.contact_no}`)}></li>
                </ul>
              ))}
            {activeTab === "global" &&
              globalAddresses.map((item, index) => (
                <ul key={index} className="text-lg">
                  <li dangerouslySetInnerHTML={sanitizeHTML(`${item.country.country_name}`)}></li>
                  <li dangerouslySetInnerHTML={sanitizeHTML(`${item.full_address}`)}></li>
                  <li dangerouslySetInnerHTML={sanitizeHTML(`${item.email}`)}></li>
                  <li dangerouslySetInnerHTML={sanitizeHTML(`${item.contact_no}`)}></li>
                </ul>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
