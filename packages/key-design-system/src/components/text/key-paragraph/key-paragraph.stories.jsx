import { h } from '@stencil/core';
import { LoremIpsum } from 'lorem-ipsum';

export default {
  title: 'Components/Text/Paragraph',
  argTypes: {
    variant: {
      options: ['default', 'intro'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'large'],
      control: { type: 'radio' },
    },
  },
};

export const Paragraph = (args) => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  return (
    <div>
      <key-paragraph {...{ ...args, variant: 'intro' }}>
        {lorem.generateParagraphs(1)}
      </key-paragraph>

      <key-paragraph {...args}>{lorem.generateParagraphs(1)}</key-paragraph>

      <key-paragraph {...args}>{lorem.generateParagraphs(1)}</key-paragraph>
    </div>
  );
};
