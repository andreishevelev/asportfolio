import { useState, useRef, useEffect } from "react";

type AboutProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function About({ isOpen, onClose }: AboutProps) {
  const modalContentRef = useRef<HTMLDivElement | null>(null);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("about-open");
    } else {
      document.body.classList.remove("about-open");
    }

    return () => document.body.classList.remove("about-open");
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (
      modalContentRef.current &&
      !modalContentRef.current.contains(e.target as Node)
    ) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        /* Body scroll lock when modal is open */
        body.about-open {
          overflow: hidden;
          touch-action: none;
          height: 100vh;
        }

        /* Overlay styles */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 15, 40, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          font-family: 'Inter', sans-serif;
          padding: 1rem;
          overflow: auto;
        }

        /* Modal content container */
        .modal-content {
          position: relative;
          background-color: rgba(15, 15, 40, 0.85);
          backdrop-filter: saturate(180%) blur(20px);
          -webkit-backdrop-filter: saturate(180%) blur(20px);
          border: 1.5px solid transparent;
          background-clip: padding-box;
          border-radius: 20px;
          max-width: 900px;
          width: 100%;
          max-height: 95dvh;
          color: #bbbde1;
          box-shadow:
            0 0 12px 1px rgba(180, 100, 255, 0.6),
            inset 0 0 30px 3px rgba(130, 80, 255, 0.3),
            0 0 40px 10px rgba(180, 100, 255, 0.3);
          animation: glowingShadow 10s ease infinite;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* Responsive padding */
        @media (max-width: 600px) {
          .modal-content {
            padding: 4rem 1rem 1rem 1rem !important;
            box-shadow: 0 0 6px 1px rgba(180, 100, 255, 0.35) !important;
            max-height: 100dvh;
          }

          .modal-scrollable-content video,
          .modal-scrollable-content img {
            max-width: 100% !important;
            height: auto !important;
          }
        }

        @media (min-width: 601px) {
          .modal-content {
            padding: 1rem 1rem 1rem 1rem;
          }
        }

        /* Close button styling */
        .modal-close-button {
          position: absolute;
          top: 10px;
          right: 16px;
          z-index: 10;
          background: transparent;
          border: none;
          font-size: 2.8rem;
          font-weight: 700;
          line-height: 1;
          cursor: pointer;
          color: #ff77e9;
          text-shadow:
            0 0 8px #ff77e9,
            0 0 18px #d358f7,
            0 0 28px #61dafb,
            0 0 38px #a164ff;
          transition: color 0.3s ease, text-shadow 0.3s ease;
          user-select: none;
          padding: 0;
        }
        .modal-close-button:hover,
        .modal-close-button:focus {
          color: #d358f7;
          outline: none;
          text-shadow:
            0 0 12px #d358f7,
            0 0 24px #a164ff;
        }

        /* Scrollable content inside modal */
        .modal-scrollable-content {
          overflow-y: auto;
          max-height: calc(90dvh - 3.5rem);
          padding-right: 0.5rem;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE 10+ */
          flex: 1;
          position: relative;
        }
        .modal-scrollable-content::-webkit-scrollbar {
          display: none; /* Chrome, Safari */
        }

        /* Gradient fade at bottom */
        .modal-gradient-fade {
          pointer-events: none;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 12rem;
          background: linear-gradient(
            to bottom,
            rgba(15, 15, 40, 0) 0%,
            rgba(15, 15, 40, 0.25) 30%,
            rgba(15, 15, 40, 0.7) 70%,
            rgba(15, 15, 40, 1) 100%
          );
          z-index: 5;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
        }

        @keyframes glowingShadow {
          0%, 100% {
            box-shadow:
              0 0 12px 1px rgba(180, 100, 255, 0.6),
              inset 0 0 30px 3px rgba(130, 80, 255, 0.3),
              0 0 40px 10px rgba(180, 100, 255, 0.3);
          }
          50% {
            box-shadow:
              0 0 20px 2px rgba(230, 150, 255, 0.8),
              inset 0 0 35px 5px rgba(160, 110, 255, 0.5),
              0 0 50px 15px rgba(230, 150, 255, 0.5);
          }
        }
      `}</style>

      <div
        className="modal-overlay"
        onClick={handleOverlayClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div
          className="modal-content"
          ref={modalContentRef}
          tabIndex={-1}
          aria-describedby="modal-description"
        >
          <button
            aria-label="Close modal"
            onClick={onClose}
            className="modal-close-button"
          >
            &times;
          </button>

          <div className="modal-scrollable-content" id="modal-description">
            <h2
              id="modal-title"
              style={{
                fontWeight: 700,
                fontSize: "2.5rem",
                marginBottom: "1.5rem",
                background: "linear-gradient(90deg, #a164ff, #61dafb, #ff77e9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 6px #a164ff)",
              }}
            >
              Hi, Andrew Shevelev here!
            </h2>

            <p
              style={{
                fontWeight: 600,
                fontSize: "1.15rem",
                marginBottom: "2rem",
                color: "#b5b5c9",
                lineHeight: 1.55,
                textShadow: "0 0 4px #aaaaff66",
              }}
            >
              I’ve been working in audio-visual for over 20 years, and I still
              love every bit of it. From live shows to studio builds, I’ve been
              behind the scenes making things sound and look great.
            </p>

            <h3
              style={{
                fontWeight: 700,
                fontSize: "1.85rem",
                marginTop: "3rem",
                marginBottom: "1.3rem",
                color: "#d2c9ff",
                borderBottom: "1.8px solid #7c64ffaa",
                paddingBottom: "0.4rem",
              }}
            >
              Here’s a quick look at what I do:
            </h3>

            {[
              {
                title: "Live Events & FOH Mixing",
                content: (
                  <>
                    I’ve mixed hundreds of shows as a Front-of-House engineer—always aiming for smooth, clean sound that just feels right.
                    <div style={{ marginTop: "1rem" }}>
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        width="100%"
                        poster="/live-events.png"
                        style={{
                          borderRadius: "12px",
                          boxShadow: "0 0 12px rgba(180, 100, 255, 0.5)",
                          width: "100%",
                        }}
                      >
                        <source src="/live-events.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </>
                ),
              },
              {
                title: "Acoustic Treatment",
                content: (
                  <>
                    Designed and implemented custom acoustic solutions for recording studios, churches and production spaces. In 2018, I had the incredible opportunity to design and build the audio production studio for the Production Center Face Time.
                    <img
                      src="/img/recording-studio.jpg"
                      alt="recording studio"
                      style={{
                        borderRadius: "12px",
                        boxShadow: "0 0 12px rgba(180, 100, 255, 0.5)",
                        width: "100%",
                        marginTop: "1rem",
                      }}
                    />
                  </>
                ),
              },
              {
                title: "AV Networking",
                content: (
                  <>
                    I’m Dante Level 3 certified and have a strong IT background, which helps me create reliable, future-ready AV systems.
                    <img
                      src="/img/dante-certificate.png"
                      alt="Dante certificate"
                      style={{
                        borderRadius: "12px",
                        boxShadow: "0 0 12px rgba(180, 100, 255, 0.5)",
                        width: "100%",
                        marginTop: "1rem",
                      }}
                    />
                  </>
                ),
              },
              {
                title: "Church AV Projects",
                content: <>
                  Helped multiple churches set up, tune, and run their sound and video systems—plus training teams to feel confident using them.
                </>,
              },
              {
                title: "AV Director",
                content:
                  "Currently the AV Director at Austin Christian Church – South Campus, handling everything from live production to streaming and team coordination.",
              },
              {
                title: "Cover Band Production",
                content: (
                  <>
                    Produced and managed a full-scale cover band—handled sound, lights, video content, and stage design to create a full concert experience.

                    <div style={{ marginTop: "1rem" }}>
                      <video
                        playsInline
                        controls
                        width="100%"
                        poster="/cover-band.png"
                        style={{
                          borderRadius: "12px",
                          boxShadow: "0 0 12px rgba(180, 100, 255, 0.5)",
                          width: "100%",
                        }}
                      >
                        <source src="/cover-band.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </>
                ),
              },
              {
                title: "Video & Streaming",
                content: (
                  <>
                    Comfortable behind the camera too—filming, editing, and streaming events and content.
                    <div style={{ marginTop: "1rem" }}>
                      <video
                        playsInline
                        controls
                        width="100%"
                        poster="/video-and-streaming.png"
                        style={{
                          borderRadius: "12px",
                          boxShadow: "0 0 12px rgba(180, 100, 255, 0.5)",
                          width: "100%",
                        }}
                      >
                        <source src="/video-and-streaming.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </>
                ),
              },
              {
                title: "AV Gear Rentals",
                content: "I also run my own small AV rental company—perfect for events, church upgrades, or short-term projects.",
              },
              {
                title: "Content Creator",
                content: "I share tips, behind-the-scenes looks, and gear reviews on my blog and YouTube channel—check them out if you’re into AV stuff!",
              },
            ].map(({ title, content }, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "1.8rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1.2rem",
                }}
              >
                <div
                  style={{
                    marginTop: "8px",
                    color: "#ff77e9",
                    fontSize: "1.6rem",
                    fontWeight: 900,
                    textShadow: "0 0 8px #ff77e9, 0 0 16px #d358f7",
                    userSelect: "none",
                    lineHeight: 1,
                  }}
                >
                  •
                </div>
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: "1.15rem",
                      marginBottom: "0.35rem",
                      color: "#b0afc6",
                      textShadow: "0 0 5px #b998ff55",
                    }}
                  >
                    {title}
                  </p>
                  <div style={{ lineHeight: 1.45 }}>{content}</div>
                </div>
              </div>
            ))}

            {/* NEXT button container with higher z-index */}
            <div
              style={{
                marginTop: "2.5rem",
                textAlign: "center",
                position: "relative",
                zIndex: 10,
              }}
            >
              <button
                onClick={onClose}
                style={{
                  width: "100%",
                  background: "linear-gradient(90deg, #a164ff, #61dafb, #ff77e9)",
                  border: "none",
                  borderRadius: "10px",
                  padding: "0.75rem 1.5rem",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#0f0f28",
                  boxShadow: "0 0 12px rgba(180, 100, 255, 0.6)",
                  cursor: "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  position: "relative",
                  zIndex: 10,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 16px rgba(180, 100, 255, 0.8)";
                  e.currentTarget.style.transform = "scale(1.03)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 12px rgba(180, 100, 255, 0.6)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                Next
              </button>
            </div>
          </div>
          <div className="modal-gradient-fade" />
        </div>
      </div>
    </>
  );
}
