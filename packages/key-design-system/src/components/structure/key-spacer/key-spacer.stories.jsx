import { h } from '@stencil/core';

export default {
  title: 'Components/Structure/Spacer',
  argTypes: {
    direction: {
      options: ['horizontal', 'vertical'],
      control: { type: 'select' },
    },
  },
};

export const Spacer = (args) => {
  return (
    <div>
      <style
        innerHTML={`
      .spacer-demo {
        display: block;
        width: 90vw;
        height: 90vh;
      }

      .spacer-demo key-spacer {
        background: var(--key-color-tertiary-light);
        margin: 2px;
      }
    `}
      ></style>
      <div class="spacer-demo">
        <key-spacer {...args} size="zero"></key-spacer>
        <key-spacer {...args} size="xxxx-small"></key-spacer>
        <key-spacer {...args} size="xxx-small"></key-spacer>
        <key-spacer {...args} size="xx-small"></key-spacer>
        <key-spacer {...args} size="x-small"></key-spacer>
        <key-spacer {...args} size="small"></key-spacer>
        <key-spacer {...args} size="medium"></key-spacer>
        <key-spacer {...args} size="large"></key-spacer>
        <key-spacer {...args} size="x-large"></key-spacer>
        <key-spacer {...args} size="xx-large"></key-spacer>
        <key-spacer {...args} size="xxx-large"></key-spacer>
        <key-spacer {...args} size="xxxx-large"></key-spacer>
      </div>
    </div>
  );
};
