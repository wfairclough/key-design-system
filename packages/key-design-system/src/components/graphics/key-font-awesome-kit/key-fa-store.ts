import { createStore } from "@stencil/store";

export interface FaKitConfig {
  version?: string;
  token?: string;
}

export interface FaIconSvgCache {
  [icon: string]: string;
}

export interface FaStore {
  config: FaKitConfig;
  'iconSvgCache-solid': FaIconSvgCache,
  'iconSvgCache-regular': FaIconSvgCache,
  'iconSvgCache-light': FaIconSvgCache,
  'iconSvgCache-thin': FaIconSvgCache,
  'iconSvgCache-brands': FaIconSvgCache,
  'iconSvgCache-duotone': FaIconSvgCache,
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

onChange('config', value => {
  console.log(`config`, value);
});

onChange('iconSvgCache-solid', value => console.log(`iconSvgCache-solid`, value));
onChange('iconSvgCache-regular', value => console.log(`iconSvgCache-regular`, value));
onChange('iconSvgCache-light', value => console.log(`iconSvgCache-light`, value));
onChange('iconSvgCache-thin', value => console.log(`iconSvgCache-thin`, value));
onChange('iconSvgCache-brands', value => console.log(`iconSvgCache-brands`, value));
onChange('iconSvgCache-duotone', value => console.log(`iconSvgCache-duotone`, value));

export function getSvgIconFromCache(weight: string, icon: string): string {
  return rawState["iconSvgCache-" + weight][icon];
}

export function cacheSvgIcon(weight: string, icon: string, svg: string) {
  rawState['iconSvgCache-' + weight] = {
    ...rawState['iconSvgCache-' + weight],
    [icon]: svg,
  };
}

export default rawState;
