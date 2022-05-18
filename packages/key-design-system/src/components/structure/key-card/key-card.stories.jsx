import { h } from '@stencil/core';

const Story = {
  title: 'Components/Structure/Card',
  argTypes: {
    header: {
      description: 'The header text',
      defaultValue: 'This is my card',
      control: { type: 'text' },
    },
    content: {
      description: 'The content text',
      defaultValue: 'This is my card',
      control: { type: 'text' },
    },
  },
};
export default Story;

export const Card = (args) => {
  return (
    <key-card header={args.header}>
      {args.content && <div>{args.content}</div>}
    </key-card>
  );
};
