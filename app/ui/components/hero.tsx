import { useEffect, useState } from "react";
import Modal from "./about";
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaBars,
  FaEnvelope,
} from "react-icons/fa";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => setIsMobileMenuOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll helper for reviews section
  const scrollToReviews = () => {
    const el = document.getElementById("reviews");
    if (el) {
      // Use 1000px breakpoint for menu controls
      const yOffset = window.innerWidth >= 1000 ? -100 : -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

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

      <div className="sticky top-[-14.5rem] min440:top-[-15rem] z-10 bg-white tablet:top-[-189px] tablet:bg-[#E1E1E1]">
        {/* Top Section with Headline */}
        <div className="relative w-full hero-mobile-top z-40 rounded-t-[20px] bg-black">
          <div className="absolute inset-0 bg-gradient-to-l from-[#4F8D9F]/70 to-black/70 z-0 rounded-t-[20px]" />
          <div className="hero-text font-extrabold tablet:mt-[12px] relative z-10">
            {/* Keep tablet breakpoint here as original */}
            <p className="tablet:hidden block w-full max-w-[20px] text-[clamp(2rem,7vw,4.5rem)] leading-none">
              ELEVATE
            </p>
            <p className="tablet:hidden block w-full text-[clamp(2rem,7vw,4.5rem)] leading-none">
              YOUR
            </p>
            <p className="tablet:hidden block w-full text-[clamp(2rem,7vw,4.5rem)] leading-none">
              EVENT
            </p>
            <p className="hidden tablet:block w-full text-[clamp(1rem,5.5vw,4.5rem)] leading-none pl-[10px]">
              ELEVATE YOUR EVENT
            </p>
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

        {/* Sticky Middle Section */}
        <div className="relative w-full bg-white custom:sticky custom:top-0 custom:z-20">
          <img
            src="/img/hero-bg.png"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-[#A2489C]/40 z-0" />

          <div className="relative z-10 px-4 py-4 custom:py-[30px] flex flex-col custom:flex-row items-stretch custom:items-center text-white font-semibold text-[clamp(1rem,4.2vw,1.3rem)] gap-4">
            <span className="block tablet:hidden bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-md text-center flex items-center min-h-full">
              20+ years of making live events sound and look their best.
            </span>

            <div className="flex items-center custom:ml-auto w-full custom:w-auto justify-end gap-6 custom:gap-8">
              {/* REVIEWS button */}
              <button
                onClick={scrollToReviews}
                className="hidden custom:flex glowing-button backdrop-blur-md px-4 py-2 rounded-xl shadow-md text-center pulse"
              >
                REVIEWS
              </button>

              {/* ABOUT ME button (custom+) */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="hidden custom:flex glowing-button backdrop-blur-md px-4 py-2 rounded-xl shadow-md text-center"
              >
                ABOUT ME
              </button>

              {/* Email and Social Icons */}
              <div className="flex items-center gap-4 custom:gap-5">
                {/* Email */}
                <a
                  href="mailto:contact@behindthefader.com"
                  className="glowing-button px-3 py-2 rounded-xl text-xl"
                  aria-label="Email"
                >
                  <FaEnvelope size={30} />
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@behindthefader"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glowing-button px-3 py-2 rounded-xl text-xl"
                  aria-label="YouTube"
                >
                  <FaYoutube size={30} />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/1Cdb1Tc6gR/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glowing-button px-3 py-2 rounded-xl text-xl"
                  aria-label="Facebook"
                >
                  <FaFacebook size={30} />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/behindfader"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glowing-button px-3 py-2 rounded-xl text-xl"
                  aria-label="Instagram"
                >
                  <FaInstagram size={30} />
                </a>
              </div>

              {/* Hamburger (mobile only) */}
              <button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="custom:hidden glowing-button px-3 py-2 rounded-xl"
                aria-label="Menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <FaBars size={30} />
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <div
              id="mobile-menu"
              className="custom:hidden absolute top-full left-0 w-full bg-black bg-opacity-90 z-30 text-white flex flex-col gap-4 px-6 py-6 text-[1.7rem] font-bold"
            >
              <button
                onClick={() => {
                  scrollToReviews();
                  setIsMobileMenuOpen(false);
                }}
              >
                REVIEWS
              </button>
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                ABOUT ME
              </button>
            </div>
          )}

          <div className="absolute bottom-0 left-0 w-full h-[0px] custom:h-[0.5vw] bg-[#E1E1E1] z-10" />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
