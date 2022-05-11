
const Story = {
  title: 'Components/Button',
  decorators: [(story) => `<div style="margin: 1em">${story()}</div>`],
  argTypes: {
    variant: {
      description: 'The type of button',
      options: ['solid', 'outline', 'plain'],
      defaultValue: 'solid',
      control: { type: 'select' },
    },
    color: {
      description: 'Color type',
      options: ['primary', 'secondary', 'tertiary', 'destructive'],
      defaultValue: 'primary',
      control: { type: 'select' },
    },
    size: {
      description: 'Size',
      options: ['default', 'small', 'large'],
      defaultValue: 'default',
      control: { type: 'select' },
    },
  },
};
export default Story;


const ButtonTemplate = ({ content, variant, color, size }) => `
<key-button variant="${variant}" color="${color}" size="${size}">
  ${content}
</key-button>
`;

export const Button = ButtonTemplate.bind({});

Button.args = {
  content: 'Button',
};
