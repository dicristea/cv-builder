import React, { useState } from "react";
import SectionItem from "./SectionItem";
import Button from "./UserFields/Button";
import PropTypes from "prop-types";
import uniqid from "uniqid";

const SectionContainer = ({ isPreviewActive, listType }) => {
  const [itemList, setitemList] = useState([]);

  const addItem = () => {
    setitemList([...itemList, uniqid()]);
  };

  const handleDeleteItem = (index) => {
    setitemList((prevList) => {
      prevList.splice(index, 1);
      return [...prevList];
    });
  };

  return (
    <div className="experience-box">
      <h3>{listType}</h3>

      {itemList.map((key, index) => (
        <div className="items-container" key={key}>
          <SectionItem
            key={key}
            index={index}
            itemType={listType}
            isPreviewActive={isPreviewActive}
            deleteItem={() => handleDeleteItem(index)}
          />
        </div>
      ))}
      <Button
        onClick={addItem}
        text={listType === "Education" ? "Add Education" : "Add Experience"}
        className="addButton"
        style={{ display: isPreviewActive ? "none" : "inline-block" }}
      />
    </div>
  );
};

SectionContainer.propTypes = {
  isPreviewActive: PropTypes.bool.isRequired,
  listType: PropTypes.string.isRequired,
};

export default SectionContainer;
