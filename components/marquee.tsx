import './marquee.css'; // Import the CSS file

const Marquee = ({ text }: { text: string }) => {
  return (
    <div className="absolute bottom-0 marquee-container flex overflow-x-hidden bg-amber-300 text-red-600 border-2 border-amber-600">
      <div className="marquee-wrapper py-4 whitespace-nowrap">
        {Array(10).fill(0).map((_, i) => (
          <span key={i} className="marquee-text text-4xl mx-4">{text}</span>
        ))}
      </div>
      <div className="marquee-wrapper py-4 whitespace-nowrap absolute top-0">
        {Array(10).fill(0).map((_, i) => (
          <span key={i} className="marquee-text text-4xl mx-4">{text}</span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;