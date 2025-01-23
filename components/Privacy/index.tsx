"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../supabase_config/supabaseClient"; // Adjust the import based on your project structure
import DOMPurify from "dompurify";

const Privacy = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState("");

  const fetchPrivacyPolicy = async () => {
    const { data, error } = await supabase
      .from("footer_links")
      .select("Privacy_Policy")
      .single(); // Fetch a single row

    if (error) {
      console.error("Error fetching privacy policy:", error);
    } else {
      setPrivacyPolicy(data.Privacy_Policy); // Set the fetched privacy policy
    }
  };

  useEffect(() => {
    fetchPrivacyPolicy();
  }, []);

  // Function to sanitize HTML content
  const sanitizeHTML = (html: string) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-4" dangerouslySetInnerHTML={sanitizeHTML(privacyPolicy || "Loading...")} />
      </div>
    </section>
  );
};

export default Privacy;
