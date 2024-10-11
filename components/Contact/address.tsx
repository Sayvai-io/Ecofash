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
const stripHTML = (htmlString) => {
  const sanitized = DOMPurify.sanitize(htmlString);
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = sanitized;
  return tempDiv.textContent || tempDiv.innerText || ""; // Get inner text
};
const Address = () => {
  const [indiaAddresses, setIndiaAddresses] = useState<any>([]);
  const [globalAddresses, setglobalAddresses] = useState<any>([]);
  useEffect(() => {
    const getData = async () => {
      const getAddressData = await fetchAddress();

      const indiaAddressData = getAddressData?.filter((item: any) => {
        const countryName = stripHTML(item.country.country_name);

        return countryName.trim().toLowerCase() == "india";
      });
      const acrossGlobeAddresses = getAddressData?.filter((item: any) => {
        const countryName = stripHTML(item.country.country_name);

        return countryName.trim().toLowerCase() != "india";
      });
      setIndiaAddresses(indiaAddressData);
      setglobalAddresses(acrossGlobeAddresses);
    };
    getData();
  }, []);
  return (
    <div>
      <h1 className="pl-12 pt-24 text-2xl font-bold text-black">
        Our Office Across Globe.
      </h1>
      <div className="grid grid-cols-1 gap-12 pl-12 pt-8 md:grid-cols-2">
        <div>
          <h2 className="mb-3 text-xl font-semibold text-black">India</h2>
          {indiaAddresses.map((item, index) => (
            <ul key={index} className="mb-6 text-lg text-black">
              <li
                style={{ paddingLeft: "7.5rem" }}
                dangerouslySetInnerHTML={sanitizeHTML(`${item.full_address}`)}
              ></li>
              <li
                style={{ paddingLeft: "7.5rem" }}
                dangerouslySetInnerHTML={sanitizeHTML(`${item.email}`)}
              ></li>
              <li
                style={{ paddingLeft: "7.5rem" }}
                dangerouslySetInnerHTML={sanitizeHTML(`${item.contact_no}`)}
              ></li>
            </ul>
          ))}
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-black">
            Global Offices
          </h2>
          {globalAddresses.map((item, index) => (
            <ul key={index} className="mb-6 text-lg text-black">
              <li
                dangerouslySetInnerHTML={sanitizeHTML(
                  `${item.country.country_name}`,
                )}
              ></li>
              <li
                style={{ paddingLeft: "7.5rem" }}
                dangerouslySetInnerHTML={sanitizeHTML(`${item.full_address}`)}
              ></li>
              <li
                style={{ paddingLeft: "7.5rem" }}
                dangerouslySetInnerHTML={sanitizeHTML(`${item.email}`)}
              ></li>
              <li
                style={{ paddingLeft: "7.5rem" }}
                dangerouslySetInnerHTML={sanitizeHTML(`${item.contact_no}`)}
              ></li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Address;
