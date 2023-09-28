import { CartItem } from '@/types/cart';
import { create } from 'zustand';

interface DataStore {
  data: CartItem[];
  setItems: (items: CartItem[]) => void;
}

const useDataStore = create<DataStore>((set) => ({
  data: [],
  setItems: (items: CartItem[]) => set({ data: items }),
}));

export default useDataStore;
