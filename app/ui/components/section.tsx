interface SectionProps {
  section: {
    titles: string[];
    paragraphs: string[];
    buttonText: string;
  };
  index: number;
}

export default function Section({ section, index }: SectionProps) {
  // Determine section background color
  const sectionBg = (index + 1) % 2 === 1 ? 'bg-[#4F8D9F]' : 'bg-[#D4D4D4]';
  const fontColor = (index + 1) % 2 === 1 ? 'text-white' : 'text-black';

  // Determine section top background color
  const sectionTopBg =
    index === 0
      ? 'bg-[#D4D4D4]'
      : index % 2 == 0
        ? 'bg-[#D4D4D4]'
        : 'bg-[#4F8D9F]';

  return (
    <div className="section-container">
      <div className={`relative ${sectionTopBg}`}>
        <div className={`relative h-7 ${sectionBg} rounded-t-[20px]`}></div>
      </div>
      <section
        id={`section-${index}`}
        className={`scroll-mt-[40px] ${sectionBg} overflow-hidden`}
      >
        {section.titles.map((title, i) => (
          <h2
            key={`title-${i}`}
            className={`pr-[5vw] text-[32px] font-extralight text-right ${fontColor}`}
          >
            {title}
          </h2>
        ))}

        {section.paragraphs.map((para, i) => (
          <p
            key={`para-${i}`}
            className={`leading-relaxed text-[20px] font-normal pl-[6vw] pr-[9vw] mt-3 ${fontColor}`}
          >
            {para}
          </p>
        ))}

        <div className="flex justify-center items-center">
          <button className={`text-[8vw] font-bold my-[4vw] ${fontColor}`}>
            {section.buttonText}
          </button>
        </div>
      </section>
    </div>
  );
}
