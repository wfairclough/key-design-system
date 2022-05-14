import { h } from '@stencil/core';

export default {
  title: 'Components/Text/Visually Hidden',
  args: {
  },
};

export const VisuallyHidden = (args) => {
  return <key-visually-hidden {...args}>
    <key-label>This text can still be read by screen readers</key-label>
  </key-visually-hidden>;
};
