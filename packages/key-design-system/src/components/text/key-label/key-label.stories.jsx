import { h } from '@stencil/core';

export default {
  title: 'Components/Text/Label',
  argTypes: {
    text: {
      control: { type: 'text' },
    },
    color: {
      control: { type: 'text' },
    },
  },
};

export const Label = (args) => {
  const { text, ...labelArgs } = args;
  return <key-label {...labelArgs}>{text}</key-label>;
};
