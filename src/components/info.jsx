import React from "react";
import InputField from "./UserFields/InputField";
import PropTypes from "prop-types";

const Info = ({ isPreviewActive }) => {
  return (
    <div className="info-box">
      <h3>Introduction</h3>
      <div className="info-input-box">
        <InputField
          type="text"
          label="Full Name"
          id="fullname"
          title="Please enter your full name."
          isPreviewActive={isPreviewActive}
        />
        <InputField
          type="email"
          label="E-mail"
          id="email"
          title="Please enter a valid email."
          isPreviewActive={isPreviewActive}
        />
        <InputField
          type="tel"
          label="Phone Number"
          id="phone"
          pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
          title="Please enter a valid phone number."
          isPreviewActive={isPreviewActive}
        />
        <InputField
          type="text"
          label="City, State"
          id="location"
          title="Please enter a valid location."
          isPreviewActive={isPreviewActive}
        />
        <InputField
          type="text"
          label="LinkedIn"
          id="linkedin"
          title="Please enter a valid Linkedin URL."
          isPreviewActive={isPreviewActive}
        />
      </div>
    </div>
  );
};

Info.propTypes = {
  isPreviewActive: PropTypes.bool.isRequired,
};

export default Info;
