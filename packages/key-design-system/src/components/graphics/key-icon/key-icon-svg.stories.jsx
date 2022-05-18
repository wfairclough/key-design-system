import { h } from '@stencil/core';
import { v4 as uuid } from 'uuid';

export default {
  title: 'Components/Graphics/Icon',
  argTypes: {
    size: {
      description: 'Size for icon',
      defaultValue: '8rem',
      control: { type: 'text' },
    },
    color: {
      description: 'Color for icon',
      defaultValue: 'hsl(180deg 100% 27%)',
      control: { type: 'color' },
    },
    svgSource: {
      description: 'Custom SVG Source',
      defaultValue: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:.4}</style></defs><path class="fa-primary" d="M64 224h13.5C102.3 280.5 158.4 320 224 320s121.8-39.5 146.5-96H384c8.75 0 16-7.25 16-16v-96C400 103.3 392.8 96 384 96h-13.5C345.8 39.5 289.6 0 224 0S102.3 39.5 77.5 96H64C55.25 96 48 103.3 48 112v96C48 216.8 55.25 224 64 224zM104 136C104 113.9 125.5 96 152 96h144c26.5 0 48 17.88 48 40V160c0 53-43 96-96 96h-48c-53 0-96-43-96-96V136zM336.1 315.4C304 338.6 265.1 352 224 352s-80.03-13.43-112.1-36.59C46.55 340.2 0 403.3 0 477.3C0 496.5 15.52 512 34.66 512H128v-64c0-17.75 14.25-32 32-32h128c17.75 0 32 14.25 32 32v64h93.34C432.5 512 448 496.5 448 477.3C448 403.3 401.5 340.2 336.1 315.4zM272 448c-8.75 0-16 7.25-16 16s7.25 16 16 16s16-7.25 16-16S280.8 448 272 448z"/><path class="fa-secondary" d="M296 96h-144c-26.5 0-48 17.88-48 40V160c0 53 43 96 96 96h48c53 0 96-43 96-96V136C344 113.9 322.5 96 296 96zM212.6 163.8L188 172L179.8 196.6c-1.215 3.645-6.375 3.645-7.59 0L164 172L139.4 163.8c-3.646-1.219-3.646-6.375 0-7.594L164 148l8.205-24.62c1.215-3.648 6.375-3.648 7.59 0L188 148l24.62 8.203C216.3 157.4 216.3 162.6 212.6 163.8zM288 416H160c-17.67 0-32 14.33-32 32v64h32v-48C160 455.3 167.3 448 176 448S192 455.3 192 464V512h128v-64C320 430.3 305.7 416 288 416zM272 480c-8.75 0-16-7.25-16-16s7.25-16 16-16s16 7.25 16 16S280.8 480 272 480z"/></svg>
      `.trim(),
      control: { type: 'text' },
    },
  },
};

export const CustomSVGIcon = (args, { loaded }) => {
  const id = uuid();
  const { size, color } = args;
  const iconStyle = {
    ...(size && { '--size': size }),
    ...(color && { '--icon-color': color }),
  };
  return (
    <key-flex row justify-center items-center wrap key={id}>
      <key-icon style={iconStyle} innerHTML={args.svgSource}></key-icon>
    </key-flex>
  );
};
