interface PagefindUIOptions {
  autofocus?: boolean;
  bundlePath?: string;
  element?: string;
  showImages?: boolean;
  showSubResults?: boolean;
}

declare class PagefindUI {
  constructor(options: PagefindUIOptions);
}

interface Window {
  PagefindUI: typeof PagefindUI;
}
