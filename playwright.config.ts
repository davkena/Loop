import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    workers: 6,
    fullyParallel: true,
  use: {
    headless: false,
  },
};
export default config