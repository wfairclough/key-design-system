import { h } from '@stencil/core';
import { v4 as uuid } from 'uuid';

export default {
  title: 'Components/Indicators/Banner',
  argTypes: {
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
  const { actions, ...bannerArgs } = {
    header: 'Job has been archived',
    content: 'This job has been archived. You can still find this job by search through all inactive jobs',
    ...args,
  };
  return <div key={uuid()}>
    <key-banner id="demo-banner" {...bannerArgs}>
      <key-icon slot="icon" faIcon='fa-check-circle' faWeight='fa-solid' color={args.color}></key-icon>
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
    <key-button variant="outline" color={args.color ?? 'critical'}>Delete job</key-button>
    <key-button variant="outline" color="banner-default">See job details</key-button>
  </div>;
  return Banner({ ...args, actions });
};
