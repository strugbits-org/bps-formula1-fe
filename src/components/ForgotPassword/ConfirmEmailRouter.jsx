const ConfirmEmailRouter = ({ data }) => {
  return (
    <p style={{ width: "100%", textAlign: "right" }}>
      <span
        className="btn-underlined-white btn-confirm-email"
        style={{
          fontStyle: "italic",
          textDecoration: "underline",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        {data && data.forgotPasswordButtonLabel}
      </span>
    </p>
  );
};

export default ConfirmEmailRouter;
