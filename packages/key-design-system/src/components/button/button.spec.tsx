import { newSpecPage } from '@stencil/core/testing';
import { Button } from './button';

describe('key-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: '<key-button></key-button>',
    });
    expect(root).toEqualHtml(`
      <key-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </key-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: `<key-button first="Stencil" last="'Don't call me a framework' JS"></key-button>`,
    });
    expect(root).toEqualHtml(`
      <key-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </key-button>
    `);
  });
});
