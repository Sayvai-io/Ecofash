import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center mb-80 px-4 md:px-8">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">
            Guiding Brands to
            <br />
            a <span className="text-[#609641] font-bold text-3xl">Greener</span> Future
          </h2>
        </div>
        <div className="md:w-1/2">
          <p className="mb-4">
            Founded in 2020, Ecofash Services emerged from a deep commitment to revolutionize 
            the fashion industry, placing sustainability and ethics at the forefront of our mission. 
            What began as a small initiative driven by passion and a vision for change quickly evolved into
          </p>
          <button className="flex items-center text-black hover:underline">
            Our Services <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
      <div className="bg-[#609641] py-12 px-4 md:px-8 relative">
        <div className="w-full md:-mt-80 flex justify-center">
          <Image
            src="/images/service/Services-meeting.jpg"
            alt="Service Meeting"
            width={960}
            height={360}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="mt-12 flex flex-wrap justify-center">
          <div className="w-1/2 md:w-1/4 text-center mb-8">
            <p className="text-8xl font-bold text-white mb-4">10+</p>
            <p className="text-xl text-black">Years of Experience</p>
          </div>
          <div className="w-1/2 md:w-1/4 text-center mb-8">
            <p className="text-8xl font-bold text-white mb-4">5+</p>
            <p className="text-xl text-black">Satisfied Clients</p>
          </div>
          <div className="w-1/2 md:w-1/4 text-center mb-8">
            <p className="text-8xl font-bold text-white mb-4">27</p>
            <p className="text-xl text-black">Services Provided</p>
          </div>
          <div className="w-1/2 md:w-1/4 text-center mb-8">
            <p className="text-8xl font-bold text-white mb-4">10+</p>
            <p className="text-xl text-black">Business Portfolios</p>
          </div>
        </div>
      </div>
      <div className="text-center py-16 px-4">
        <h2 className="text-5xl font-bold mb-4 text-black">
          <span className="block mb-4">"Sustainable Strategy, Ethical Supply</span>
          Chains, <span className="text-[#609641]">Fashion Innovation."</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8 mb-16">
        <Link href="/service/supply-chain-mapping" className="block">
          <div className="bg-[#609641] rounded-lg p-6 h-full transition-transform hover:scale-105">
            <h3 className="text-white text-lg font-bold mb-4">Sustainable Supply Chain Mapping</h3>
            <p className="text-white">
              We help you map your entire supply chain to identify areas where sustainability can be improved. 
              Our experts work closely with you to ensure every step of your supply chain is optimized for 
              environmental responsibility.
            </p>
          </div>
        </Link>
        
        <Link href="/service/b-corp-certification" className="block">
          <div className="bg-[#609641] rounded-lg p-6 h-full transition-transform hover:scale-105">
            <h3 className="text-white text-lg font-bold mb-4">B Corp Certification</h3>
            <p className="text-white">
              At Ecofash Services, we offer comprehensive guidance through the certification process, helping you understand and meet the rigorous standards required. Our team of experts will assist you in evaluating and improving your social and environmental practices, ensuring your business not only meets but exceeds B Corp criteria.
            </p>
          </div>
        </Link>
        
        <Link href="/service/carbon-neutral-planning" className="block">
          <div className="bg-[#609641] rounded-lg p-6 h-full transition-transform hover:scale-105">
            <h3 className="text-white text-lg font-bold mb-4">Carbon Neutral Planning</h3>
            <p className="text-white">
              Achieve carbon neutrality with our comprehensive planning services. We start by assessing your current carbon footprint, evaluating emissions throughout your supply chain. Based on this assessment, we create a customized plan to reduce and offset emissions, including energy efficiency improvements and sustainable practices. Our ongoing support ensures you stay on track to meet your carbon neutrality goals.
            </p>
          </div>
        </Link>
        
        <Link href="/service/circular-economy-implementation" className="block">
          <div className="bg-[#609641] rounded-lg p-6 h-full transition-transform hover:scale-105">
            <h3 className="text-white text-lg font-bold mb-4">Circular Economy Implementation</h3>
            <p className="text-white">
              Transition to a circular economy with our expert guidance. We help you implement systems that minimize waste, enhance recycling practices, and integrate sustainability into every aspect of your business operations.
            </p>
          </div>
        </Link>
        
        <Link href="/service/sustainability-outsourcing" className="block">
          <div className="bg-[#609641] rounded-lg p-6 h-full transition-transform hover:scale-105">
            <h3 className="text-white text-lg font-bold mb-4">Sustainability Outsourcing</h3>
            <p className="text-white">
              Outsource your sustainability needs to us and benefit from cost savings on maintaining an in-house team. We offer a full range of services, including sustainability reporting, sustainable material sourcing, and strategy development. Our team manages all aspects of your sustainability efforts, from tracking and reporting your environmental impact to identifying and sourcing eco-friendly materials.
            </p>
          </div>
        </Link>
        
        <Link href="/service/other-services" className="block">
          <div className="bg-[#609641] rounded-lg p-6 h-full transition-transform hover:scale-105">
            <h3 className="text-white text-lg font-bold mb-4">Other Services</h3>
            <p className="text-white">
              In addition to our core services, we offer Sustainability Communication to effectively share your environmental efforts, Training and Capacity Building to empower your team with essential skills, Green Funding Assistance to help you secure financial support for sustainability projects, and ESG Reporting to meet regulatory requirements and highlight your achievements.
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
