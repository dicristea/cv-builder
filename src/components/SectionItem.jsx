import React from "react";
import DateField from "./UserFields/DateField";
import InputField from "./UserFields/InputField";
import TextareaField from "./UserFields/TextareaField";
import Button from "./UserFields/Button";
import PropTypes from "prop-types";

const SectionItem = ({ itemType, isPreviewActive, deleteItem }) => {
  return (
    <div className="list-box">
      <div className="list-header">
        <InputField
          type="text"
          label={itemType == "Education" ? "Academy" : "Company"}
          name={itemType == "Education" ? "academy" : "company"}
          id={itemType == "Education" ? "academy" : "company"}
          isPreviewActive={isPreviewActive}
        />
        <InputField
          type="text"
          label={itemType == "Education" ? "Certification" : "Role"}
          name={itemType == "Education" ? "certification" : "role"}
          id={itemType == "Education" ? "certification" : "role"}
          isPreviewActive={isPreviewActive}
        />
      </div>
      <div className="list-date">
        <DateField
          label="From "
          name="start-date"
          id="start-date"
          isPreviewActive={isPreviewActive}
        />
        <DateField
          label="To "
          name="end-date"
          id="end-date"
          isPreviewActive={isPreviewActive}
        />
      </div>
      <div className="list-textarea">
        <TextareaField
          label={
            itemType == "Education"
              ? "Optional: Honors & Awards"
              : "Description"
          }
          name="description"
          id="description"
          isPreviewActive={isPreviewActive}
        />
        <Button
          className="deleteButton"
          text="Delete"
          onClick={deleteItem}
          style={{ display: isPreviewActive ? "none" : "inline-block" }}
        />
      </div>
    </div>
  );
};

SectionItem.propTypes = {
  itemType: PropTypes.string.isRequired,
  isPreviewActive: PropTypes.bool.isRequired,
  deleteItem: PropTypes.func,
};

export default SectionItem;
