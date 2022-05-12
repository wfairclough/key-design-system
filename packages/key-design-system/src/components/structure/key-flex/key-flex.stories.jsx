import { h } from '@stencil/core';
import { range } from 'packages/key-design-system/src/utils/utils';

const flagProps = [
  'justifyStart',
  'justifyEnd',
  'justifyCenter',
  'justifySpaceAround',
  'justifySpaceBetween',
  'justifySpaceEvenly',
  'itemsStart',
  'itemsEnd',
  'itemsCenter',
  'itemsStretch',
  'itemsBaseline',
  'nowrap',
  'wrap',
  'wrapReverse',
  'row',
  'rowReverse',
  'column',
  'columnReverse',
];
const flagArgs = flagProps.reduce((argTypes, flag) => ({
  ...argTypes,
  [flag]: {
    control: { type: 'boolean' },
  },
}), {});

const Story = {
  title: 'Components/Structure/Flex',
  argTypes: {
    ...flagArgs,
    numberOfChildren: {
      control: { type: 'number' },
    },
  },
};
export default Story;

export const Flex = (args) => {
  const { numberOfChildren, ...inheritArgs } = args;
  const childStyle = {
    // border: '1px solid blue',
    margin: '1rem',
    width: '7rem',
    // height: '7rem',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderRadius: '3px',
  };
  return <div style={{ display: 'block', height: '90vh', width: '90vw', border: '1px solid #aaa' }}>
    <key-flex {...inheritArgs}>
      { range(numberOfChildren || 5).map((val, index) => (<key-card style={childStyle} header={`Item ${index + 1}`}></key-card>))}
    </key-flex>
  </div>;
};
