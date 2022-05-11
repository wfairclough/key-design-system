import { h } from "@stencil/core";

const Story = {
  title: 'Components/Structure/Card',
  argTypes: {
    variant: {
      description: 'The description',
      options: ['opt1', 'opt2', 'opt3'],
      defaultValue: 'opt1',
      control: { type: 'select' },
    },
  },
};
export default Story;

export const Card = (args) => {
  return (
    <key-card first="Will"></key-card>
  );
};

