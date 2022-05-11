import { h } from '@stencil/core';

const Story = {
  title: 'Components/Structure/KeyAppFrame',
  decorators: [(story) => <div style={{ margin: '1em' }}>{story()}</div>],
  argTypes: {
  },
};
export default Story;

export const KeyAppFrame = (args) => {
  return (<key-app-frame></key-app-frame>);
};
