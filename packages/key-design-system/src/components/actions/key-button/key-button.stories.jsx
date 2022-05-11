import { Fragment, h, Host } from '@stencil/core';

const Story = {
  title: 'Components/Actions/Button',
  decorators: [(story) => <div style={{ margin: '1em' }}>{story()}</div>],
  argTypes: {
    text: {
      description: 'The button text',
      control: { type: 'text' },
    },
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



export const SolidButton = (args) => {
  return PlainButton({ color: args.color ?? 'primary', variant: 'solid', ...args });
};

export const OutlineButton = (args) => {
  return PlainButton({ color: args.color ?? 'primary', variant: 'outline', ...args, });
};

export const PlainButton = (args) => {
  const itemStyle = {
    margin: '1rem',
  };
  return <key-grid axis="vertical">
    <key-grid-item style={itemStyle}>
      <key-button 
        variant={args.variant}
        color={args.color}
        size={args.size}
      >
        { args.text ?? 'Button' }
      </key-button>
    </key-grid-item>
    <key-grid-item style={itemStyle}>
      <button>Standard Button</button>
    </key-grid-item>
  </key-grid>;
};
