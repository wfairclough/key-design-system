import { Fragment, h, Host } from '@stencil/core';
import { v4 as uuid } from 'uuid';

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
      options: ['primary', 'secondary', 'tertiary', 'critical'],
      control: { type: 'select' },
      // control: { type: 'color' },
    },
    size: {
      description: 'Size',
      options: ['default', 'small', 'large'],
      control: { type: 'select' },
    },
    rounded: {
      description: 'Rounded',
      control: { type: 'boolean' },
    },
  },
};
export default Story;

export const SolidIconButton = (args) => {
  return PlainIconButton({
    color: args.color ?? 'primary',
    variant: 'solid',
    ...args,
  });
};

export const SolidButton = (args) => {
  return PlainButton({
    color: args.color ?? 'primary',
    variant: 'solid',
    ...args,
  });
};

export const SolidButtonWithIcon = (args) => {
  return PlainButtonWithIcon({
    color: args.color ?? 'primary',
    variant: 'solid',
    ...args,
  });
};

export const OutlineButton = (args) => {
  return PlainButton({
    color: args.color ?? 'primary',
    variant: 'outline',
    ...args,
  });
};

export const OutlineButtonWithIcon = (args) => {
  return PlainButtonWithIcon({
    color: args.color ?? 'primary',
    variant: 'outline',
    ...args,
  });
};

export const PlainButton = (args) => {
  const itemStyle = {
    margin: '1rem',
  };
  return (
    <key-grid axis="vertical" key={uuid()}>
      <key-grid-item style={itemStyle}>
        <key-button
          id="btn"
          variant={args.variant ?? 'plain'}
          color={args.color}
          size={args.size}
          rounded={args.rounded}
        >
          {args.text ?? 'Button'}
        </key-button>
      </key-grid-item>
      <key-grid-item style={itemStyle}>
        <button>Standard Button</button>
      </key-grid-item>
    </key-grid>
  );
};

export const PlainButtonWithIcon = (args) => {
  const itemStyle = {
    margin: '1rem',
  };
  return (
    <key-grid axis="vertical" key={uuid()}>
      <key-grid-item style={itemStyle}>
        <key-button
          id="btn-w-icon"
          variant={args.variant ?? 'plain'}
          color={args.color}
          size={args.size}
          rounded={args.rounded}
        >
          <key-icon
            slot="start"
            fa-weight="fa-regular"
            fa-icon="fa-plus"
          ></key-icon>
          {/* <key-icon slot="end" fa-weight="fa-regular" fa-icon="fa-trash"></key-icon> */}

          {args.text ?? 'Button'}
        </key-button>
      </key-grid-item>
    </key-grid>
  );
};

export const PlainIconButton = (args) => {
  const itemStyle = {
    margin: '1rem',
  };
  return (
    <key-grid axis="vertical" key={uuid()}>
      <key-grid-item style={itemStyle}>
        <key-button
          id="icon-btn"
          variant={args.variant ?? 'plain'}
          color={args.color}
          size={args.size}
          rounded={args.rounded}
        >
          <key-icon
            slot="icon"
            fa-weight="fa-regular"
            fa-icon="fa-plus"
          ></key-icon>
        </key-button>
      </key-grid-item>
    </key-grid>
  );
};
