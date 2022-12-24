import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div className={css.section}>
      <h2 className={css.section__title}>{title}</h2>
      {children}
    </div>
  );
};

Section.protoType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};
