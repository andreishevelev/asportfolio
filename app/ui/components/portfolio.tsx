import React, { Fragment } from "react";
import Modal from "./hire";
import { reviews } from "../../../data/reviews"


type PortfolioProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Portfolio({ isModalOpen, setIsModalOpen }: PortfolioProps) {
  return (
    <div className="z-50">
      <div className="z-50">
        <div className="relative bg-[#D4D4D4]"></div>

        <div className="flex justify-center items-center">
          <h2 className="text-[clamp(1vw,20vw,3rem)] font-bold px-4 my-[1vw] text-black">
            REVIEWS
          </h2>
        </div>

        {reviews.map((item, index) => (
          <Fragment key={index}>
            <section
              key={index}
              className={`
                scroll-mt-[40px]
                overflow-hidden
                relative
                bg-black
                bg-cover
                bg-center
                bg-no-repeat
                bg-fixed
                z-0
                rounded-[20px]
              `}
              style={{
                backgroundColor: "#111",
                backgroundImage: `url(${item.background})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-white/1" />

              <div className="relative z-10 flex flex-col custom:flex-row items-stretch justify-center gap-[3vw] px-[5vw] custom:px-[2vw] py-[5vw]">
                <div className="w-full custom:w-1/2 flex border-[5px] rounded-[20px] border-white/10 shadow-[0_0_10px_10px_rgba(255,255,255,0.6)] backdrop-blur-md">
                  <div className="flex-grow flex items-center justify-center rounded-[20px] overflow-hidden shadow-lg backdrop-blur-md bg-black/30">
                    <picture className="w-full h-full">
                      <source
                        media="(min-width: 1000px)"
                        srcSet={item.src_tablet}
                      />
                      <img
                        src={item.src_mobile}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                      />
                    </picture>
                  </div>
                </div>

                <div className="w-full custom:w-1/2 flex mt-[2vw] custom:mt-0">
                  <div className="flex flex-col justify-between flex-grow rounded-[20px] p-[1vw] text-white bg-black/60 shadow-xl backdrop-blur-md">
                    <div>
                      <p className="px-2 py-3 rounded-xl border border-white/20 shadow-md tablet:p-6 text-center tablet:text-left leading-relaxed text-[clamp(1rem,4vw,1.4rem)] font-normal bg-white/10 backdrop-blur-md">
                        {item.review}
                      </p>

                      <h2 className="py-2 tablet:pt-4 text-[clamp(0.9rem,3vw,1.2rem)] text-center tablet:text-right text-white font-light">
                        {item.signature}
                      </h2>
                    </div>

                    <div className="flex justify-center mt-[3vw]">
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="text-[clamp(1rem,4vw,2rem)] bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-md"
                      >
                        {item.button}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="mt-10"></div>
          </Fragment>
        ))}

      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}