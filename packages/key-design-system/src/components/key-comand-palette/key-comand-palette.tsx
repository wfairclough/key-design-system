import { Component, h, Host, Prop, Element, State, Listen } from '@stencil/core';

@Component({
  tag: 'key-comand-palette',
  styleUrl: 'key-comand-palette.css',
  shadow: true,
})
export class KeyComandPalette {
  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) showing: boolean;

  @Prop() triggerChord: string;

  @State() keys: string[] = [];

  @Listen('keydown', { target: 'document' })
  _keydownListener(event: KeyboardEvent) {
    console.log(`keydown "${this.triggerChord}"`, event)
    this.keys = [...this.keys, event.key];

    const cmd = this.keys.join('+');
    console.log(cmd);
    if (cmd === this.triggerChord) {
      this.showing = !this.showing;
    }
  }

  @Listen('keyup', { target: 'document' })
  _keyupListener(event: KeyboardEvent) {
    console.log(`keyup "${this.triggerChord}"`, event)
    this.keys = [];
  }

  render() {
    if (!this.showing) {
      return <Host></Host>
    }
    return (
      <Host>
        <div class="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20" role="dialog" aria-modal="true">
          <key-backdrop></key-backdrop>

          <div class="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
            <div class="relative">
              <svg class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
              <input type="text" autofocus class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm" placeholder="Search..." role="combobox" aria-expanded="false" aria-controls="options"></input>
            </div>

            <ul class="max-h-80 scroll-py-10 scroll-pb-2 space-y-4 overflow-y-auto p-4 pb-2" id="options" role="listbox">
              <li>
                <h2 class="text-xs font-semibold text-gray-900">Projects</h2>
                <ul class="-mx-4 mt-2 text-sm text-gray-700">
                  <li class="group flex cursor-default select-none items-center px-4 py-2" id="option-1" role="option" tabindex="-1">
                    <svg class="h-6 w-6 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    <span class="ml-3 flex-auto truncate">Workflow Inc. / Website Redesign</span>
                  </li>

                </ul>
              </li>
              <li>
                <h2 class="text-xs font-semibold text-gray-900">Users</h2>
                <ul class="-mx-4 mt-2 text-sm text-gray-700">
                  <li class="group flex cursor-default select-none items-center px-4 py-2" id="option-2" role="option" tabindex="-1">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-6 w-6 flex-none rounded-full"></img>
                    <span class="ml-3 flex-auto truncate">Leslie Alexander</span>
                  </li>

                </ul>
              </li>
            </ul>

            <div class="py-14 px-6 text-center text-sm sm:px-14">
              <svg class="mx-auto h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <p class="mt-4 font-semibold text-gray-900">Help with searching</p>
              <p class="mt-2 text-gray-500">Use this tool to quickly search for users and projects across our entire platform. You can also use the search modifiers found in the footer below to limit the results to just users or projects.</p>
            </div>

            <div class="py-14 px-6 text-center text-sm sm:px-14">
              <svg class="mx-auto h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p class="mt-4 font-semibold text-gray-900">No results found</p>
              <p class="mt-2 text-gray-500">We couldn’t find anything with that term. Please try again.</p>
            </div>

            <div class="flex flex-wrap items-center bg-gray-50 py-2.5 px-4 text-xs text-gray-700">Type <kbd class="mx-1 flex h-5 w-5 items-center justify-center rounded border border-gray-400 bg-white font-semibold text-gray-900 sm:mx-2">#</kbd> <span class="sm:hidden">for projects,</span><span class="hidden sm:inline">to access projects,</span> <kbd class="mx-1 flex h-5 w-5 items-center justify-center rounded border border-gray-400 bg-white font-semibold text-gray-900 sm:mx-2">&gt;</kbd> for users, and <kbd class="mx-1 flex h-5 w-5 items-center justify-center rounded border border-gray-400 bg-white font-semibold text-gray-900 sm:mx-2">?</kbd> for help.</div>
          </div>
        </div>
      </Host>
    );
  }
}
