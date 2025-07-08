'use client';

import React, { useState, useEffect } from "react";
import Header from "./ui/components/header";
import Hero from "./ui/components/hero";
import Portfolio from "./ui/components/portfolio";
import Modal from "./ui/components/hire";

function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showUpButton, setShowUpButton] = useState(false);

  // Show button only after scrolling 300px down
  useEffect(() => {
    const handleScroll = () => {
      setShowUpButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll smoothly to top when button clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Hide TopNav if modal is open */}
      {!isModalOpen && (
        <div className="tablet:hidden sticky top-0 z-40">
          <Header />
        </div>
      )}

      <div className="app-container">
        <div className="content-container top-[70px] z-30">
          <Hero />
          <div className="section-container bg-black tablet:bg-[#E1E1E1]">
            <div
              className={`
                relative
                scroll-mt-[40px]
                overflow-hidden
                bg-[url('/img/review-5-bg.png')]
                bg-cover
                bg-center
                bg-no-repeat
                bg-fixed
                z-0
                tablet:rounded-b-[20px]
                rounded-t-[20px]
              `}
            >
              <section className="bg-white/60 tablet:bg-white/40 tablet:backdrop-blur-sm">
                <div className="flex justify-end items-start pr-[5vw] pl-[5vw] tablet:pr-[16vw] gap-4 pt-[15px]">
                  <div className="flex flex-col gap-1 items-end">
                    <h2 className="text-[clamp(1vw,7vw,2.5rem)] font-light text-right whitespace-nowrap">
                      PA TUNING
                    </h2>
                    <h2 className="text-[clamp(1vw,7vw,2.5rem)] font-light text-right whitespace-nowrap">
                      LIVE MIXING
                    </h2>
                    <h2 className="text-[clamp(1vw,7vw,2.5rem)] font-light text-right whitespace-nowrap">
                      VIDEO BROADCASTING
                    </h2>
                    <h2 className="text-[clamp(1vw,7vw,2.5rem)] font-light text-right whitespace-nowrap">
                      SOUND SYSTEM DESIGN
                    </h2>
                  </div>
                  <div className="w-[2px] bg-black tablet:min-h-[16rem] mt-1" />
                </div>

                <p
                  className={`leading-relaxed text-[clamp(1vw,5vw,1.4rem)] font-normal py-3 mt-5 pl-[6vw] pr-[9vw] tablet:pl-[12vw] text-black bg-white/70 backdrop-blur-lg`}
                >
                  I make events sound amazing — clear, comfortable, and pro.
                  Churches, companies, and creatives count on me for sound they
                  can trust.
                </p>
              </section>
              <div className="flex justify-center items-center tablet:rounded-b-[20px]">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className={`text-[clamp(1vw,8vw,3rem)] font-bold px-4 my-[4vw] text-white bg-[#29758B] rounded-[15px]`}
                >
                  WORK WITH ME
                </button>
              </div>
            </div>
          </div>
          <Portfolio
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
      </div>

      {/* Floating Up Button — fixed in viewport, no layout impact */}
      {showUpButton && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="
            hidden
            custom:flex
            fixed
            bottom-[2vw]
            right-[1vw]
            bg-[#29758B]
            z-50
            text-white
            px-4
            py-2
            rounded-full
            hover:bg-[#1f5869]
            transition
            duration-300
            active:scale-95
            select-none
            text-center
            leading-relaxed
            
          "
          style={{ width: 50, height: 50, fontSize: '1.5rem' }}
        >
          ↑
        </button>
      )}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default Page;
