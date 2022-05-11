import { h } from '@stencil/core';

const Story = {
  title: 'Components/Actions/Button',
  decorators: [(story) => <div style={{ margin: '1em' }}>{story()}</div>],
  argTypes: {
    variant: {
      description: 'The type of button',
      options: ['solid', 'outline', 'plain'],
      control: { type: 'select' },
    },
    color: {
      description: 'Color type',
      options: ['primary', 'secondary', 'tertiary', 'destructive'],
      control: { type: 'select' },
      // control: { type: 'color' },
    },
    size: {
      description: 'Size',
      options: ['default', 'small', 'large'],
      control: { type: 'select' },
    },
  },
};
export default Story;



export const Button = (args) => {
  console.log(`args`, args);
  return <key-button 
      variant={args.variant}
      color={args.color}
      size={args.size}
    >
    { args.content }
  </key-button>;
}

Button.args = {
  content: 'Button',
};
