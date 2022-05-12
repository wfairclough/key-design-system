import { h } from '@stencil/core';
import { faIcons } from './fa-icons';

export default {
  title: 'Components/Graphics/Icon',
  argTypes: {
    faIcon: {
      // control: { type: 'text' },
      options: faIcons?.data?.release?.icons?.map(icon => `fa-${icon.id}`)?.sort(),
      control: { type: 'select' },
    },
    faWeight: {
      description: 'Font Awesome Weight',
      options: ['fa-solid', 'fa-regular', 'fa-light', 'fa-thin', 'fa-duotone', 'fa-brands'],
      control: { type: 'select' },
    },
    fontSize: {
      description: 'Size for icon',
      control: { type: 'text' },
    },
    color: {
      description: 'Color for icon',
      control: { type: 'color' },
    },
  },
};

export const FontAwesomeIcon = (args, { loaded }) => {
  const { fontSize, color, iconRange, faIcon, faWeight } = args;
  const iconArgs = {
    faIcon: faIcon ?? 'fa-user',
    faWeight: faWeight ?? 'fa-duotone',
  }
  const iconStyle = {
    '--size': fontSize ?? '6rem',
    // fontSize: fontSize ?? '6rem',
    color: color ?? 'hsl(180deg 100% 27%)',
  };
  return <key-flex row justify-center items-center wrap>
    <key-icon style={iconStyle} {...iconArgs}></key-icon>
  </key-flex>;
};

// let cachedIcons = null;

// FontAwesomeIcon.loaders = [
//   async () => ({
//     icons: cachedIcons ??= (await (await fetch('https://api.fontawesome.com',{
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         query: `query {
//           release (version: "latest") {
//             icons { id, label, styles, unicode }
//           }
//         }
//         `
//       }),
//     }))?.json())?.data?.release?.icons?.map(icon => ({ ...icon, name: `fa-${icon.id}` })),
//   }),
// ];
