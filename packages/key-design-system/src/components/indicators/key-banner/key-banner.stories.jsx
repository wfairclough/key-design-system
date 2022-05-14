import { h } from '@stencil/core';
import { v4 as uuid } from 'uuid';

import { faIcons } from '../../graphics/key-icon/fa-icons';

export default {
  title: 'Components/Indicators/Banner',
  argTypes: {
    icon: {
      options: faIcons?.data?.release?.icons?.map(icon => `fa-${icon.id}`)?.sort(),
      control: { type: 'select' },
    },
    iconWeight: {
      description: 'Font Awesome Weight',
      options: ['fa-solid', 'fa-regular', 'fa-light', 'fa-thin', 'fa-duotone', 'fa-brands'],
      control: { type: 'select' },
    },
    color: {
      control: { type: 'text' },
    },
    header: {
      control: { type: 'text' },
    },
    content: {
      control: { type: 'text' },
    },
    expanded: {
      control: { type: 'boolean' },
    },
  },
};

export const Banner = (args) => {
  const { actions, icon, iconWeight, ...bannerArgs } = {
    header: 'Job has been archived',
    content: 'This job has been archived. You can still find this job by search through all inactive jobs',
    icon: 'fa-check-circle',
    iconWeight: 'fa-solid',
    ...args,
  };
  return <div key={uuid()}>
    <key-banner id="demo-banner" {...bannerArgs}>
      <key-icon slot="icon" faIcon={icon} faWeight={iconWeight}></key-icon>
      { actions }
    </key-banner>
    <script innerHTML={`
      document.querySelector('#demo-banner').addEventListener('keyDismiss', () => {
        console.log('Banner was dismissed');
      });
    `}></script>
  </div>;
};

export const BannerWithActions = (args) => {
  const actions = <div slot="actions">
    <key-button variant="outline" color={'critical'}>Delete job</key-button>
    <key-button variant="outline" color="banner-default">See job details</key-button>
  </div>;
  return Banner({ ...args, actions });
};
