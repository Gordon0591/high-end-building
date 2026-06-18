import { useMemo } from 'react';
import { useSolutionStore } from '@/store/useSolutionStore';
import { getAvailableSceneApps, getAvailableProcesses, getAvailableProducts } from '@/utils/filterLogic';
import type { CascadeOptions } from '@/types';

export function useCascadeOptions(): CascadeOptions {
  const space = useSolutionStore(s => s.selectedSpace);
  const app = useSolutionStore(s => s.selectedSceneApp);
  const process = useSolutionStore(s => s.selectedProcess);
  return useMemo(() => ({
    availableSceneApps: getAvailableSceneApps(space),
    availableProcesses: getAvailableProcesses(app),
    availableSeries: [], // not used in current cascade
    availableProducts: getAvailableProducts(space, app, process),
  }), [space, app, process]);
}
