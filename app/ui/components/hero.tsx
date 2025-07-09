import { useState } from "react";
import Modal from "./about";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.7;
              transform: scale(1.05);
            }
          }

          @keyframes glowingShadow {
            0%, 100% {
              box-shadow:
                0 0 12px 1px rgba(161, 100, 255, 0.7),
                inset 0 0 30px 3px rgba(130, 80, 255, 0.3),
                0 0 40px 10px rgba(161, 100, 255, 0.3);
            }
            33% {
              box-shadow:
                0 0 12px 1px rgba(97, 218, 251, 0.7),
                inset 0 0 30px 3px rgba(97, 218, 251, 0.3),
                0 0 40px 10px rgba(97, 218, 251, 0.3);
            }
            66% {
              box-shadow:
                0 0 12px 1px rgba(255, 119, 233, 0.7),
                inset 0 0 30px 3px rgba(255, 119, 233, 0.3),
                0 0 40px 10px rgba(255, 119, 233, 0.3);
            }
          }

          .pulse {
            animation: pulse 2s infinite;
          }

          .glowing-button {
            border: 1.5px solid transparent;
            background-clip: padding-box;
            background-color: rgba(255, 255, 255, 0.1);
            animation: glowingShadow 10s ease infinite;
            box-shadow:
              0 0 12px 1px rgba(180, 100, 255, 0.6),
              inset 0 0 30px 3px rgba(130, 80, 255, 0.3),
              0 0 40px 10px rgba(180, 100, 255, 0.3);
            color: white;
            font-weight: 600;
          }
        `}
      </style>

      <div className="sticky top-[-14.5rem] min440:top-[-15rem] z-10 bg-white tablet:sticky tablet:top-0 tablet:bg-[#E1E1E1]">
        <div className="relative w-full hero-mobile-top z-40 rounded-t-[20px] bg-black">
          <div className="absolute inset-0 bg-gradient-to-l from-[#4F8D9F]/70 to-black/70 z-0 rounded-t-[20px]" />
          <div className="hero-text font-extrabold tablet:mt-[12px] relative z-10">
            <p className="tablet:hidden block w-full max-w-[20px] text-[clamp(2rem,7vw,4.5rem)] leading-none">ELEVATE</p>
            <p className="tablet:hidden block w-full text-[clamp(2rem,7vw,4.5rem)] leading-none">YOUR</p>
            <p className="tablet:hidden block w-full text-[clamp(2rem,7vw,4.5rem)] leading-none">EVENT</p>
            <p className="hidden tablet:block w-full text-[clamp(1rem,5.5vw,4.5rem)] leading-none pl-[10px]">ELEVATE YOUR EVENT</p>
            <p className="hidden tablet:block text-[clamp(0.5rem,3vw,1.5rem)] leading-none pl-[10px] pr-[240px]">
              Freelance support for standout audio and video production
            </p>
          </div>

          <img
            src="/img/profile-photo.png"
            alt="Andrew Shevelev Picture"
            className="w-[200px] z-50 absolute right-[10px]"
          />
        </div>

        <div className="relative w-full bg-white tablet:sticky tablet:top-0 tablet:z-20">
          <img
            src="/img/hero-bg.png"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-[#A2489C]/40 z-0" />
          <div className="relative z-10 px-4 py-4 tablet:py-[30px] flex flex-col tablet:flex-row items-stretch justify-between text-white font-semibold text-[clamp(1rem,4.2vw,1.3rem)] gap-4">
            <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-md text-center tablet:text-left w-full tablet:w-auto flex items-center min-h-full">
              20+ years of making live events sound and look their best.
            </span>

            <button
              onClick={() => setIsModalOpen(true)}
              className="sticky top-0 z-30 tablet:static glowing-button backdrop-blur-md px-4 py-2 my-3 rounded-xl shadow-md text-center tablet:text-left w-full tablet:w-auto pulse tablet:mr-5 whitespace-nowrap flex items-center justify-center min-h-full"
            >
              ABOUT ME
            </button>
          </div>
        </div>

        <div className="w-full tablet:h-[0.5vw] bg-[#E1E1E1] z-10" />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
