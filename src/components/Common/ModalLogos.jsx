import f1Logo from "@/images/f1_icon.svg"
import bpsLogo from "@/images/bps_logo.svg"

const ModalLogos = () => {
  return (
    <div className="container-logos">
      <div
        className="container-img logo-formula-1"
        data-aos="fadeIn .8s ease-in-out .2s, d:loop"
      >
        <img src={f1Logo.src} data-preload className="media" alt="f1Logo" />
      </div>
      <div
        className="container-img logo-blueprint"
        data-aos="fadeIn .8s ease-in-out .2s, d:loop"
      >
        <img src={bpsLogo.src} data-preload className="media" alt="bpsLogo" />
      </div>
    </div>
  );
};

export default ModalLogos;
