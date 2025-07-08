'use client';

import React, { useState, useEffect } from "react";
import Header from "./ui/components/header";
import Hero from "./ui/components/hero";
import Portfolio from "./ui/components/portfolio";
import Modal from "./ui/components/hire";

type AudioFaderProps = {
  complete: boolean;
};

const AudioFader: React.FC<AudioFaderProps> = ({ complete }) => {
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  // For avoiding hydration errors: only run progress update on client
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (complete && prev < 100) {
          return Math.min(prev + 3, 100);
        }
        if (!complete && prev < 95) {
          return prev + 1;
        }
        return prev;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [complete, mounted]);

  useEffect(() => {
    if (complete && progress < 100) {
      setProgress(100);
    }
  }, [complete, progress]);

  if (!mounted) {
    // Placeholder for SSR, static appearance
    return (
      <div
        style={{
          width: 40,
          height: 150,
          borderRadius: 16,
          background:
            "linear-gradient(180deg, #3b3b3b, #222222)",
          boxShadow:
            "inset 0 8px 10px rgba(255,255,255,0.1), inset 0 -8px 10px rgba(0,0,0,0.8)",
          marginRight: 16,
        }}
      />
    );
  }

  return (
    <>
      <style>{`
        .audio-fader {
          position: relative;
          width: 40px;
          height: 150px;
          background: linear-gradient(180deg, #3b3b3b, #222222);
          border-radius: 16px;
          box-shadow:
            inset 0 8px 10px rgba(255,255,255,0.15),
            inset 0 -8px 10px rgba(0,0,0,0.85);
          margin-right: 16px;
          user-select: none;
        }

        .fader-track {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          width: 12px;
          height: 126px;
          background: #1a1a1a;
          border-radius: 6px;
          box-shadow:
            inset 0 2px 4px rgba(255,255,255,0.3),
            inset 0 -2px 4px rgba(0,0,0,0.7);
        }

        .fader-fill {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          width: 12px;
          background: linear-gradient(180deg, #4db6e1, #0b3b57);
          border-radius: 6px 6px 0 0;
          box-shadow:
            0 4px 10px rgba(77, 182, 225, 0.8),
            inset 0 -2px 6px rgba(255, 255, 255, 0.5);
          transition: height 0.3s ease-out;
          height: ${progress * 1.26}px;
        }

        .fader-handle {
          position: absolute;
          left: 50%;
          transform: translate(-50%, 50%);
          width: 60px;
          height: 32px;
          background: linear-gradient(180deg, #8fb8c8, #386a79);
          border-radius: 12px;
          box-shadow:
            0 6px 12px rgba(0, 0, 0, 0.8),
            inset 0 6px 9px rgba(255, 255, 255, 0.85);
          cursor: default;
          bottom: calc(12px + ${progress * 1.26}px);
          transition: bottom 0.3s ease-out;
        }

        .fader-highlight {
          position: absolute;
          top: 10px;
          left: 10px;
          right: 10px;
          height: 32px;
          background: linear-gradient(180deg, rgba(255,255,255,0.25), transparent);
          border-radius: 12px 12px 0 0;
          pointer-events: none;
        }
      `}</style>

      <div
        className="audio-fader"
        aria-label="Audio volume fader"
        role="slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
      >
        <div className="fader-track" />
        <div className="fader-fill" />
        <div className="fader-handle" />
        <div className="fader-highlight" />
      </div>
    </>
  );
};

function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showUpButton, setShowUpButton] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowUpButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);

    // Loading delay: set isMounted true after 2 seconds
    const timeout = setTimeout(() => setIsMounted(true), 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isMounted) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black text-white">
        <div className="flex flex-col items-center gap-4">
          <AudioFader complete={false} />
          <p className="text-lg font-semibold">Loading...</p>
          <p className="text-lg font-semibold">BEHINDTHEFADER.COM</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {!isModalOpen && (
        <div className="tablet:hidden sticky top-0 z-40 about-open:hidden">
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

                <p className="leading-relaxed text-[clamp(1vw,5vw,1.4rem)] font-normal py-3 mt-5 pl-[6vw] pr-[9vw] tablet:pl-[12vw] text-black bg-white/70 backdrop-blur-lg">
                  I make events sound amazing — clear, comfortable, and pro.
                  Churches, companies, and creatives count on me for sound they
                  can trust.
                </p>
              </section>

              <div className="flex justify-center items-center tablet:rounded-b-[20px]">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-[clamp(1vw,8vw,3rem)] font-bold px-4 my-[4vw] text-white bg-[#29758B] rounded-[15px]"
                >
                  WORK WITH ME
                </button>
              </div>
            </div>
          </div>

          <Portfolio isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </div>
      </div>

      {showUpButton && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="hidden custom:flex fixed bottom-[2vw] right-[1vw] bg-[#29758B] z-50 text-white px-4 py-2 rounded-full hover:bg-[#1f5869] transition duration-300 active:scale-95 select-none text-center leading-relaxed"
          style={{ width: 50, height: 50, fontSize: "1.5rem" }}
        >
          ↑
        </button>
      )}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default Page;
