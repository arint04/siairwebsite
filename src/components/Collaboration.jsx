import { chart, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            Chest X-Ray Interpret with high accuracy using AI assistant
          </h2>



        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">


          <div className="relative left scale:50 md:scale-100">
                  <img
                    src={chart}
                    width={10000}
                    height={4000}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>

            

            <LeftCurve />
            <RightCurve />
    </Section>
  );
};

export default Collaboration;
