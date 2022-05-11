import { h } from '@stencil/core';

const Story = {
  title: 'Components/Structure/AppFrame',
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

export const AppFrame = (args) => {
  return (<key-app-frame></key-app-frame>);
};
