import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  Gradient,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="our-team">
      <div className="container">
        <Heading
          title="Our Team"
          text=""
        />

        <div className="relative">
        <p className="body-1 mb-[2rem] text-n-3">
        This diverse and talented team combines the expertise of radiologists and machine learning engineers, supported by dedicated staff, to develop cutting-edge AI solutions for healthcare.  Dr. Trongtum Tongdee, Dr. Thanongchai Siriaphisit, Dr. Pairash Saiviroonporn, Dr. Dittapong Songsang, Dr. Sirawat Yamtim, Dr. Worapan  Kusakunniran, Amphai Uraiverotchanakorn
                </p>
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 center-0 w-full h-full pointer-events-none md:w-auto xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4"></h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  
                </p>
              </div>

            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Siriraj Hospital</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                Siriraj Hospital is the oldest and largest hospital in Thailand, located in Bangkok. It was founded in 1888 by King Chulalongkorn and serves as a major public hospital and teaching facility affiliated with the Faculty of Medicine at Mahidol University. Known for its advanced medical services and research, Siriraj Hospital is a leading healthcare institution in Southeast Asia, offering a wide range of specialized medical treatments and comprehensive patient care.
                </p>


              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
