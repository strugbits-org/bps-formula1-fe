// "use client";
import AnimateLink from "@/components/Common/AnimateLink";
// import { useRouter } from "next/navigation";

const ConfirmEmailRouter = () => {
  //   const router = useRouter();

  return (
    <p
      //   className="text-agree mt-lg-25 mt-mobile-30"
      style={{ width: "100%", textAlign: "right" }}
    >
      <span
        className="btn-underlined-white btn-confirm-email"
        style={{
          fontStyle: "italic",
          textDecoration: "underline",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Forgot your password?
      </span>
    </p>
  );
};

export default ConfirmEmailRouter;
