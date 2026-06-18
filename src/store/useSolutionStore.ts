import { create } from 'zustand';
import type { BuildingSpace, SceneApplication, ConstructionProcess } from '@/types';

interface SolutionState {
  selectedSpace: BuildingSpace | null;
  selectedSceneApp: SceneApplication | null;
  selectedProcess: ConstructionProcess | null;
  selectedProduct: string | null;
  solutionProducts: string[];
  confirmedProducts: string[];
  isConfirmed: boolean;

  setSpace: (id: BuildingSpace) => void;
  setSceneApp: (id: SceneApplication) => void;
  setProcess: (id: ConstructionProcess) => void;
  setProduct: (id: string) => void;
  addProduct: () => void;
  removeProduct: (id: string) => void;
  reorderProducts: (fromIndex: number, toIndex: number) => void;
  confirm: () => void;
  reset: () => void;
}

export const useSolutionStore = create<SolutionState>((set) => ({
  selectedSpace: null, selectedSceneApp: null, selectedProcess: null, selectedProduct: null,
  solutionProducts: [], confirmedProducts: [], isConfirmed: false,

  // 仅建筑空间变化时重置全部；其他层级变化仅向下重置确认状态
  setSpace: (id) => set({ selectedSpace: id, selectedSceneApp: null, selectedProcess: null, selectedProduct: null, solutionProducts: [], isConfirmed: false }),
  setSceneApp: (id) => set({ selectedSceneApp: id, isConfirmed: false }),
  setProcess: (id) => set({ selectedProcess: id, isConfirmed: false }),
  setProduct: (id) => set({ selectedProduct: id, isConfirmed: false }),

  addProduct: () => set((state) => {
    if (!state.selectedProduct) return state;
    return { solutionProducts: [...state.solutionProducts, state.selectedProduct], selectedProduct: null, isConfirmed: false };
  }),
  removeProduct: (id) => set((state) => ({ solutionProducts: state.solutionProducts.filter(p => p !== id), isConfirmed: false })),
  reorderProducts: (from, to) => set((state) => { const list = [...state.solutionProducts]; const [moved] = list.splice(from, 1); list.splice(to, 0, moved); return { solutionProducts: list, isConfirmed: false }; }),
  confirm: () => set((state) => ({ isConfirmed: true, confirmedProducts: [...state.solutionProducts] })),
  reset: () => set({ selectedSpace: null, selectedSceneApp: null, selectedProcess: null, selectedProduct: null, solutionProducts: [], confirmedProducts: [], isConfirmed: false }),
}));
