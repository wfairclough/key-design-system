import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'key-backdrop',
  styleUrl: 'key-backdrop.css',
  shadow: true,
})
export class KeyBackdrop {

  render() {
    // <div class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" aria-hidden="true"></div>
    return <Host class="fixed inset-0">
      <div
        class={{
          'fixed': true,
          'inset-0': true,
          'bg-slate-500': true,
          'opacity-50': true,
          'transition-opacity': true,
          'duration-1000': true,
          'ease-in-out': true,
          'delay-150': true,
        }}>
      </div>
    </Host>;
  }
}
