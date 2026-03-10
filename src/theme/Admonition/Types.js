import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';

function CustomAdmonition({ iconSrc, ...props }) {
  return (
    <div className="theme-admonition">
      {props.title && (
        <div className="admonition-heading">
          <h5>
            <img
              src={iconSrc}
              alt="Icon"
              className="admonition-icon"
            />
            {props.title}
          </h5>
        </div>
      )}
      <div className="admonition-content">
        {props.children}
      </div>
    </div>
  );
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,
  'custom-info': (props) => <CustomAdmonition iconSrc="/icons/stakewise/info.png" {...props} />,
  'custom-notes': (props) => <CustomAdmonition iconSrc="/icons/stakewise/notes.png" {...props} />,
  'custom-tips': (props) => <CustomAdmonition iconSrc="/icons/stakewise/tips.png" {...props} />,
  'custom-warning': (props) => <CustomAdmonition iconSrc="/icons/stakewise/warning.png" {...props} />,
  'custom-stakewise': (props) => <CustomAdmonition iconSrc="/icons/stakewise/logo.png" {...props} />,
};

export default AdmonitionTypes;
