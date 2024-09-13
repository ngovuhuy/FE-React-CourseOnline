// Slide.tsx
interface SlideProps {
    title: string;
    description: string;
    imgSrc: string;
    altText: string;
    link: string;
    background: string; // Changed from backgroundColor to background
  }
  
  const Slide: React.FC<SlideProps> = ({ title, description, imgSrc, altText, link, background }) => {
    return (
      <div className="flex-important  overflow-hidden" style={{ background: background }}>
        <div className="text-slider">
          <h2 className="max-[540px]:pt-6 fz-20">{title}</h2>
          <p className="p-text">{description}</p>
          <div className="max-[540px]:pb-6">
            <a className="learn-free" href={link}>
              HỌC THỬ MIỄN PHÍ
            </a>
          </div>
        </div>
        <img src={imgSrc} alt={altText} />
      </div>
    );
  };
  export default Slide;
  