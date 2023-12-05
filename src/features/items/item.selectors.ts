import { RootState } from '../../shared/store'
import { ItemData } from './items.slice'

export const selectLoading: (state: RootState) => string = (store) =>
    store.item.loading

export const selectList: (state: RootState) => ItemData[] = (store) =>
    store.item.list

export const selectSingle: (state: RootState) => ItemData | null = (store) =>
    store.item.single
