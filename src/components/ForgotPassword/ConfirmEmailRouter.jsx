import React from 'react';

const ConfirmEmailRouter = ({ data }) => {
  return (
    <p className="confirm-email-container">
      <span className="btn-underlined-white btn-confirm-email confirm-email-button">
        {data && data.forgotPasswordButtonLabel}
      </span>
    </p>
  );
};

export default ConfirmEmailRouter;