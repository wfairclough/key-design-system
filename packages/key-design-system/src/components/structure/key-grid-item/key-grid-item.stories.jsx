import { h } from '@stencil/core';

const Story = {
  title: 'Components/Structure/GridItem',
  decorators: [(story) => <div style={{ margin: '1em' }}>{story()}</div>],
  argTypes: {
    parentGridAxis: {
      description: 'Parent Grid Axis',
      options: ['horizontal', 'vertical'],
      control: { type: 'select' },
    },
    margin: {
      description: 'margin-between-items',
      control: { type: 'text' },
    },
  },
};
export default Story;

export const GridItem = (args) => {
  return <key-grid-item>Item</key-grid-item>;
};

export const ItemsInGrid = (args) => {
  const styles = {
    margin: args.margin ?? '1rem',
  };
  return (
    <key-grid axis={args.parentGridAxis ?? 'horizontal'}>
      <key-grid-item style={styles}>1</key-grid-item>
      <key-grid-item style={styles}>2</key-grid-item>
      <key-grid-item style={styles}>3</key-grid-item>
      <key-grid-item style={styles}>4</key-grid-item>
    </key-grid>
  );
};
