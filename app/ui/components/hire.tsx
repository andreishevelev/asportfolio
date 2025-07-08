import { useRef, useEffect } from "react";

type HireProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Hire({ isOpen, onClose }: HireProps) {
  const modalContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
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
      <style>
        {`
          .modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(8px);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 100;
            overflow: hidden;
            padding: 0;
          }

          .modal-content {
            background: white;
            width: 100%;
            max-width: 700px;
            height: 100%;
            max-height: 90vh;
            display: flex;
            flex-direction: column;
            box-shadow: 0 4px 24px rgba(0,0,0,0.25);
            overflow: hidden;
            position: relative;
            border-radius: 12px;
          }

          .modal-header {
            display: flex;
            justify-content: flex-end;
            position: sticky;
            top: 0;
            background: white;
            z-index: 1;
          }

          .modal-close-button {
            background-color: rgba(34, 45, 65, 0.68);
            color: rgb(255, 255, 255);
            border: 1px solid rgba(0,0,0,0.1);
            padding: 0.5rem 2rem;
            font-size: 0.875rem;
            font-weight: 500;
            text-transform: none;
            cursor: pointer;
            box-shadow: 0 1px 1px rgba(0,0,0,0.1);
            transition: background-color 0.2s ease, box-shadow 0.2s ease;
          }

          .modal-close-button:hover {
            background-color: rgba(66, 63, 63, 0.47);
            box-shadow: 0 2px 3px rgba(0,0,0,0.15);
          }

          .iframe-wrapper {
            flex: 1;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }

          @media (max-width: 600px) {
            .modal-content {
              height: 100vh;
              max-height: 100vh;
              border-radius: 0;
            }
          }

          @media (min-width: 600px) {
            .modal-content {
              height: 95vh;
              max-height: 95vh;
              border-radius: 12px;
            }
          }
        `}
      </style>

      <div className="modal-overlay" onClick={handleOverlayClick}>
        <div className="modal-content" ref={modalContentRef}>
          <div className="modal-header">
            <button className="modal-close-button" onClick={onClose}>
              CLOSE
            </button>
          </div>
          <div className="iframe-wrapper">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfZK4ReUJjwHdvWKA4MQ-syUhz9Wghhbb0SIWWdCEl934noQw/viewform?embedded=true"
              width="100%"
              height="100%"
              style={{ minHeight: "600px", border: "none" }}
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
}
