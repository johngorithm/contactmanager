import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextInputGroup = props => {
  const { type, name, value, onFieldChange, label, error } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        type={type}
        name={name}
        value={value}
        onChange={onFieldChange}
      />
      {error ? <p className="invalid-feedback">{error}</p> : null}
    </div>
  );
};

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

TextInputGroup.defaultProps = {
  type: "text"
};
export default TextInputGroup;
