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
      document.body.style.overflow = "hidden"; // prevent background scroll
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
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
            top: 0;
            left: 0;
            width: 100%;
            height: 100dvh;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(8px);
            z-index: 1000;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .modal-content {
            width: 100%;
            height: 100dvh;
            background: white;
            display: flex;
            flex-direction: column;
            border-radius: 0;
            box-shadow: 0 4px 24px rgba(0,0,0,0.25);
            overflow: hidden;
            position: relative;
          }

          .modal-header {
            display: flex;
            justify-content: flex-end;
            background: white;
            padding: 1rem;
            position: sticky;
            top: 0;
            z-index: 10;
            border-bottom: 1px solid #ddd;
          }

          .modal-close-button {
            background-color: rgba(34, 45, 65, 0.68);
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
            cursor: pointer;
            border-radius: 4px;
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

          iframe {
            width: 100%;
            height: 100%;
            border: none;
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
              title="Hire Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
}
