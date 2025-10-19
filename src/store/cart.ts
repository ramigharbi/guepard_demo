import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  description: string;
  category: string;
  priceGold: number;
  priceSilver: number;
  priceCopper: number;
  quantity: number;
  discount?: number; // Applied discount percentage
}

export interface CartTotal {
  gold: number;
  silver: number;
  copper: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => CartTotal;
  getItemCount: () => number;
}

// Helper function to normalize currency (convert overflow)
function normalizeCurrency(gold: number, silver: number, copper: number): CartTotal {
  let totalCopper = copper + (silver * 100) + (gold * 1000);
  
  const finalGold = Math.floor(totalCopper / 1000);
  totalCopper %= 1000;
  
  const finalSilver = Math.floor(totalCopper / 100);
  const finalCopper = totalCopper % 100;
  
  return {
    gold: finalGold,
    silver: finalSilver,
    copper: finalCopper,
  };
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);
          
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }
          
          return {
            items: [...state.items, { ...item, quantity: 1 }],
          };
        });
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }
        
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      getTotal: () => {
        const items = get().items;
        let totalGold = 0;
        let totalSilver = 0;
        let totalCopper = 0;

        items.forEach((item) => {
          const discount = item.discount || 0;
          const discountMultiplier = 1 - (discount / 100);
          
          totalGold += Math.floor(item.priceGold * item.quantity * discountMultiplier);
          totalSilver += Math.floor(item.priceSilver * item.quantity * discountMultiplier);
          totalCopper += Math.floor(item.priceCopper * item.quantity * discountMultiplier);
        });

        return normalizeCurrency(totalGold, totalSilver, totalCopper);
      },

      getItemCount: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },
    }),
    {
      name: 'apothecary-cart-storage',
    }
  )
);
