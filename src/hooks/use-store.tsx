import { createContext, useContext } from 'react';
import { Instance } from 'mobx-state-tree';
import { RootStore } from '../store';

const RootStoreContext = createContext<null | Instance<typeof RootStore>>(null);

export const StoreProvider = RootStoreContext.Provider;

export const useStore = () => {
  const store = useContext(RootStoreContext);

  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }

  return store;
};
