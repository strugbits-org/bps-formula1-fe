import { useEffect, useState, useMemo } from "react";
import { getFullSvgURL } from "@/utils/GenerateImageURL";
import { getModalLogos } from "@/services/apiServices";

const ModalLogos = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const res = await getModalLogos();
      setData(res);
    } catch (error) {
      console.error("Error fetching modal logos:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const f1LogoUrl = useMemo(() => {
    return data ? getFullSvgURL(data.f1Logo) : "";
  }, [data]);

  const bpsLogoUrl = useMemo(() => {
    return data ? getFullSvgURL(data.bpsLogo) : "";
  }, [data]);

  if (!data) {
    return null;
  }

  return (
    <div className="container-logos">
      <div
        className="container-img logo-formula-1"
        data-aos="fadeIn .8s ease-in-out .2s, d:loop"
      >
        <img src={f1LogoUrl} data-preload className="media" alt="f1Logo" />
      </div>
      <div
        className="container-img logo-blueprint"
        data-aos="fadeIn .8s ease-in-out .2s, d:loop"
      >
        <img src={bpsLogoUrl} data-preload className="media" alt="bpsLogo" />
      </div>
    </div>
  );
};

export default ModalLogos;
