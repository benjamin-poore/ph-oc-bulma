import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
interface InputProps {
  value?: string;
}
export const InputIcon: React.FC<InputProps> = ({ value }) => {
  if (value === "is-success") {
    return (
      <span className="icon is-small is-right has-text-success">
        <FontAwesomeIcon icon={faCheck} size={"sm"} />
      </span>
    );
  } else if (value === "is-danger") {
    return (
      <span className="icon is-small is-right has-text-danger">
        <FontAwesomeIcon icon={faXmark} size={"sm"} />
      </span>
    );
  }
};
