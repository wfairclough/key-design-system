import { h } from '@stencil/core';

export default {
  title: 'Components/Graphics/FontAwesomeKit',
  argTypes: {
    faKitUrl: {
      control: { type: 'text' },
    }
  },
};

export const FontAwesomeKit = (args) => {
  return <key-font-awesome-kit {...args}></key-font-awesome-kit>;
};
