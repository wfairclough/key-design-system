import { h } from "@stencil/core";

export default {
  title: 'Components/Structure/KeyCard',
  argTypes: {
    variant: {
      description: 'The description',
      options: ['opt1', 'opt2', 'opt3'],
      defaultValue: 'opt1',
      control: { type: 'select' },
    },
  },
};

export const KeyCard = (args) => (<key-card first="Will"></key-card>);
