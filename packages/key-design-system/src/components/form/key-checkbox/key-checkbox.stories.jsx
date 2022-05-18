import { h } from '@stencil/core';

export default {
  title: 'Components/Form/Checkbox',
  argTypes: {
    checked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readonly: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    color: {
      control: { type: 'color' },
    },
    customIcon: {
      control: { type: 'boolean' },
    },
  },
};

const customIconStyles = `
#demo-checkbox.key-checkbox-checked.customIcon::part(native-label)::after {
  background: var(--key-checkbox-checked-bg, transparent url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20512%22%20fill%3D%22white%22%3E%3Cpath%20d%3D%22M310.6%20361.4c12.5%2012.5%2012.5%2032.75%200%2045.25C304.4%20412.9%20296.2%20416%20288%20416s-16.38-3.125-22.62-9.375L160%20301.3L54.63%20406.6C48.38%20412.9%2040.19%20416%2032%20416S15.63%20412.9%209.375%20406.6c-12.5-12.5-12.5-32.75%200-45.25l105.4-105.4L9.375%20150.6c-12.5-12.5-12.5-32.75%200-45.25s32.75-12.5%2045.25%200L160%20210.8l105.4-105.4c12.5-12.5%2032.75-12.5%2045.25%200s12.5%2032.75%200%2045.25l-105.4%20105.4L310.6%20361.4z%22%2F%3E%3C%2Fsvg%3E") no-repeat 0 0);
  top: 0.32rem;
  left: 0.45rem;
  width: 1rem;
  height: 1rem;
}`;

export const Checkbox = (args) => {
  const { customIcon, ...checkboxArgs } = args;
  return (
    <div>
      <style innerHTML={customIconStyles}></style>
      <key-checkbox id="demo-checkbox" class={{ customIcon }} {...checkboxArgs}>
        Enabled
      </key-checkbox>
      <script
        innerHTML={`
      var checkEl = document.getElementById('demo-checkbox');
      checkEl.addEventListener('keyChanged', (evt) => {
        console.log('keyChanged', evt);
      });
      `}
      ></script>
    </div>
  );
};
