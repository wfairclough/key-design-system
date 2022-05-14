import { h } from '@stencil/core';

export default {
  title: 'Components/Form/Input',
  argTypes: {
    variant: {
      options: ['default', 'email', 'search', 'password', 'tel', 'date'],
      control: { type: 'select' },
    },
    type: {
      options: ['button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week', 'datetime'],
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
