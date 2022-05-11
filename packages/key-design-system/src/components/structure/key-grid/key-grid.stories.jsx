import { h } from '@stencil/core';

const Story = {
  title: 'Components/Structure/Grid',
  decorators: [(story) => <div style={{ margin: '1em' }}>{story()}</div>],
  argTypes: {
    axis: {
      description: 'GridAxis',
      options: ['horizontal', 'vertical'],
      defaultValue: 'horizontal',
      control: { type: 'select' },
    },
    mainAxisAlignment: {
      description: 'MainAxisAlignment',
      options: ['start', 'end', 'center', 'space-between', 'space-around', 'space-evenly'],
      defaultValue: '',
      control: { type: 'select' },
    },
    crossAxisAlignment: {
      description: 'CrossAxisAlignment',
      options: ['start', 'end', 'center', 'baseline', 'stretch'],
      defaultValue: '',
      control: { type: 'select' },
    },
    fit: {
      description: 'Fit',
      options: ['tight', 'expand'],
      defaultValue: 'tight',
      control: { type: 'select' },
    },
    crossfit: {
      description: 'Fit',
      options: ['tight', 'expand'],
      defaultValue: 'tight',
      control: { type: 'select' },
    },
    wrap: {
      description: 'boolean',
      options: [true, false],
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};
export default Story;

export const Grid = (args) => {
  return (
  <key-grid
    axis={args.axis}
    mainAxisAlignment={args.mainAxisAlignment}
    crossAxisAlignment={args.crossAxisAlignment}
    fit={args.fit}
    crossfit={args.crossfit}
    wrap={args.wrap}
  >
    {args.content}
  </key-grid>);
};

