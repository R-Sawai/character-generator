
// hooks.ts
import type { AppDispatch, RootState } from '@/utils/characterDataStore';
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';

// 型付きフック
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

