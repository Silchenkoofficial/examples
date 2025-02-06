import { Instance, types } from 'mobx-state-tree';

export interface IRootStore extends Instance<typeof RootStore> {}

const ThemeEnumMST = types.enumeration('ThemeEnumMST', ['light', 'dark']);

export const RootStore = types
  .model('RootStore', {
    theme: types.optional(ThemeEnumMST, 'light'),
  })
  .actions((self) => ({
    toggleTheme() {
      self.theme = self.theme === 'light' ? 'dark' : 'light';
    },
  }));

export const store = RootStore.create({});
