/// <reference types="astro/client" />

declare module 'alpinejs' {
  interface AlpineInstance {
    start(): void;
  }

  const Alpine: AlpineInstance;
  export default Alpine;
}

declare global {
  interface Window {
    Alpine: import('alpinejs').default;
  }
}

export {};
