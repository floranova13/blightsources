import React from 'react';
import ReactTooltip from 'react-tooltip';
import { toTitleCase } from '../utils';
import Icon from './Icon';

const IconWrapper = ({ icon, classes, size, height = 32, width = 32 }) => {
  return (
    <div className='inline-block' data-tip={toTitleCase(icon)}>
      <Icon className='inline-block' icon={icon} size={size} />
      <ReactTooltip />
    </div>
  );
};

export default IconWrapper;
