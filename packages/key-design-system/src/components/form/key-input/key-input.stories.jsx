import { h } from '@stencil/core';

export default {
  title: 'Components/Form/Input',
  argTypes: {
    variant: {
      options: ['default', 'email', 'search', 'password', 'tel', 'date'],
      control: { type: 'select' },
    },
    type: {
      options: ['text', 'numeric', 'password', 'email', 'date'],
      control: { type: 'select' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
};

export const Input = (args) => {
  args = {
    ...args,
  };
  return <key-input {...args}></key-input>;
};
