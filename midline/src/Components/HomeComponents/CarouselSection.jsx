import Video from "../../../public/video/CustomerVideo.mp4";
import "./CarouselSection.css";

const CarouselSection = () => {
  return (
    <div className="container-fluid position-relative p-0">
      <div className="video-wrapper">
        <video autoPlay muted loop playsInline preload="metadata" style={{ width: "100%"}}>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default CarouselSection
