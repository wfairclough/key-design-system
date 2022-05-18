import { h } from '@stencil/core';

export default {
  title: 'Components/Indicators/Spinner',
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    spinnerColor: {
      control: { type: 'color' },
    },
  },
};

export const Spinner = (args) => {
  const spinnerStyle = {
    ...(args.spinnerColor && { '--key-spinner-color': args.spinnerColor }),
  };
  return <key-spinner style={spinnerStyle} {...args}></key-spinner>;
};
