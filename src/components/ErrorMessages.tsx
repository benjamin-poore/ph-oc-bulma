import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FieldError } from "@/types";
import { capitalizeFirstLetter } from "@/util/helpers";

interface errorProps {
  errors: FieldError;
}

export const ErrorMessages: React.FC<errorProps> = ({ errors }) => {
  if (errors.dirty) {
    return errors.messages.map((msg, i) => (
      <p key={i} className="help is-danger has-text-weight-bold">
        {capitalizeFirstLetter(msg)}
      </p>
    ));
  }
};
