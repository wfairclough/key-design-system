import { h } from '@stencil/core';

export default {
  title: 'Components/Text/Heading',
  argTypes: {
    level: {
      options: ['1', '2', '3', '4', '5', '6'],
      control: { type: 'radio' },
    },
  },
};

export const Heading = (args) => {
  return <key-heading {...args}>
    This is a heading level {args.level ?? '1'}
  </key-heading>;
};
