import { createStore } from '@stencil/store';
import { Logger } from 'packages/key-design-system/src/utils/logger';

const DEBUG = false;

const log = Logger.create('FaStore');

export interface FaKitConfig {
  version?: string;
  token?: string;
}

export interface FaIconSvgCache {
  [icon: string]: string;
}

export interface FaStore {
  config: FaKitConfig;
  'iconSvgCache-solid': FaIconSvgCache;
  'iconSvgCache-regular': FaIconSvgCache;
  'iconSvgCache-light': FaIconSvgCache;
  'iconSvgCache-thin': FaIconSvgCache;
  'iconSvgCache-brands': FaIconSvgCache;
  'iconSvgCache-duotone': FaIconSvgCache;
}

const { state: rawState, onChange } = createStore<FaStore>({
  config: {},
  'iconSvgCache-solid': {},
  'iconSvgCache-regular': {},
  'iconSvgCache-light': {},
  'iconSvgCache-thin': {},
  'iconSvgCache-brands': {},
  'iconSvgCache-duotone': {},
});

if (DEBUG) {
  onChange('config', (value) => {
    log.debug(`config`, value);
  });

  onChange('iconSvgCache-solid', (value) =>
    log.debug(`iconSvgCache-solid`, value)
  );
  onChange('iconSvgCache-regular', (value) =>
    log.debug(`iconSvgCache-regular`, value)
  );
  onChange('iconSvgCache-light', (value) =>
    log.debug(`iconSvgCache-light`, value)
  );
  onChange('iconSvgCache-thin', (value) =>
    log.debug(`iconSvgCache-thin`, value)
  );
  onChange('iconSvgCache-brands', (value) =>
    log.debug(`iconSvgCache-brands`, value)
  );
  onChange('iconSvgCache-duotone', (value) =>
    log.debug(`iconSvgCache-duotone`, value)
  );
}

export function getSvgIconFromCache(weight: string, icon: string): string {
  return rawState['iconSvgCache-' + weight][icon];
}

export function cacheSvgIcon(weight: string, icon: string, svg: string) {
  rawState['iconSvgCache-' + weight] = {
    ...rawState['iconSvgCache-' + weight],
    [icon]: svg,
  };
}

export default rawState;
