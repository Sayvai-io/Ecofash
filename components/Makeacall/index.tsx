"use client"; // Add this line at the top

import { useState } from "react";
import PhoneInput, { PhoneInputProps } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./customPhoneInput.css"; // Your custom styles
import { PhoneIcon } from "@heroicons/react/24/solid"; // Add this import
import { useSelector } from "react-redux";
import translationData from "../../app/store/translation.json";

// Step 1: Define the extended type and custom component
interface ExtendedPhoneInputProps extends PhoneInputProps {
  className?: string;
}

const CustomPhoneInput: React.FC<ExtendedPhoneInputProps> = (props) => {
  return <PhoneInput {...props} />;
};

const Makeacall = () => {
  const language = useSelector((state: any) => state.language.language);
  const [phone, setPhone] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      to_number: phone,
      name: name,
      email: email,
    };
    const endpoint = "https://voice.sayvai.io/make_call";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Call initiated successfully!");
      } else {
        alert("Failed to initiate call.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Call initiated successfully!");
    }
  };

  return (
    <section
      id="makeACallSection"
      className="relative z-10 mt-16 overflow-hidden pb-5 md:pb-5 lg:pb-5"
    >
      <div className=" w-full">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="dark:bg-dark mx-auto max-w-[500px] rounded-lg border border-gray-200 bg-white px-6 py-6 shadow-lg dark:border-gray-700 dark:shadow-gray-800 sm:p-[60px]">
              <div className="mb-3 flex items-center justify-center">
                <PhoneIcon className="mr-2 h-8 w-8 text-[#609641]" />
                {language === "en" && (
                  <h3 className="text-center text-4xl font-bold text-black dark:text-white sm:text-4xl">
                    Request a <span className="text-[#609641]">Call</span>
                  </h3>
                )}
                {language !== "en" && (
                  <h3 className="text-center text-4xl font-bold text-black dark:text-white sm:text-4xl">
                    {translationData["Request a Call"]}
                  </h3>
                )}
              </div>
              {language == "en" && (
                <p className="text-body-color mb-11 text-center text-base font-medium">
                  Feel the state-of-the-art Voice Interaction
                </p>
              )}
              {language != "en" && (
                <p className="text-body-color mb-11 text-center text-base font-medium">
                  {
                    translationData[
                      "Feel the state-of-the-art Voice Interaction"
                    ]
                  }
                </p>
              )}

              <form onSubmit={handleSubmit}>
                <div className="group mb-8">
                  <label
                    htmlFor="phone"
                    className="text-dark mb-3 block text-sm transition-colors duration-300 group-hover:text-[#609641] dark:text-white"
                  >
                    Phone Number
                  </label>
                  <CustomPhoneInput
                    country={"in"}
                    value={phone}
                    onChange={(phone: string) => setPhone(phone)}
                    className="dark:text-body-color-dark dark:shadow-two text-body-color w-full rounded-lg bg-[#f8f8f8] px-6 py-3 text-base outline-none transition-all duration-300 focus:border-[#609641] focus:shadow-[0_0_0_3px_rgba(96,150,65,0.3)] group-hover:border-[#609641] group-hover:shadow-[0_0_0_3px_rgba(96,150,65,0.3)] dark:border-transparent dark:bg-[#2C303B] dark:focus:border-[#609641] dark:focus:shadow-[0_0_0_3px_rgba(96,150,65,0.3)] dark:focus:shadow-none dark:group-hover:border-[#609641] dark:group-hover:shadow-[0_0_0_3px_rgba(96,150,65,0.3)]"
                  />
                </div>

                <div className="group mb-8">
                  <label
                    htmlFor="name"
                    className="text-dark mb-3 block text-sm transition-colors duration-300 group-hover:text-[#609641] dark:text-white"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="dark:text-body-color-dark dark:shadow-two text-body-color w-full rounded-lg bg-[#f8f8f8] px-6 py-3 text-base outline-none transition-all duration-300 focus:border-[#609641] focus:shadow-[0_0_0_3px_rgba(96,150,65,0.3)] group-hover:border-[#609641] group-hover:shadow-[0_0_0_3px_rgba(96,150,65,0.3)] dark:border-transparent dark:bg-[#2C303B] dark:focus:border-[#609641] dark:focus:shadow-[0_0_0_3px_rgba(96,150,65,0.3)] dark:focus:shadow-none dark:group-hover:border-[#609641] dark:group-hover:shadow-[0_0_0_3px_rgba(96,150,65,0.3)]"
                  />
                </div>
                <div className="group mb-8">
                  <label
                    htmlFor="email"
                    className="text-dark mb-3 block text-sm transition-colors duration-300 group-hover:text-[#609641] dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="dark:text-body-color-dark dark:shadow-two text-body-color w-full rounded-lg bg-[#f8f8f8] px-6 py-3 text-base outline-none transition-all duration-300 focus:border-[#609641] focus:shadow-[0_0_0_3px_rgba(96,150,65,0.3)] group-hover:border-[#609641] group-hover:shadow-[0_0_0_3px_rgba(96,150,65,0.3)] dark:border-transparent dark:bg-[#2C303B] dark:focus:border-[#609641] dark:focus:shadow-[0_0_0_3px_rgba(96,150,65,0.3)] dark:focus:shadow-none dark:group-hover:border-[#609641] dark:group-hover:shadow-[0_0_0_3px_rgba(96,150,65,0.3)]"
                  />
                </div>

                <div className="flex items-center justify-center">
                  <button className="flex items-center justify-center rounded-xl bg-[#609641] px-6 py-3 text-base font-bold text-white transition duration-300 ease-in-out hover:bg-[#4d7a34]">
                    {language === "en"
                      ? "Request a Call"
                      : translationData["Request a Call"]}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-2 h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Makeacall;
