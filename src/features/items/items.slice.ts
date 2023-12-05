import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const namespace = 'item'

export interface ItemData {
    id: number
    title: string
    price: number
    category: string
    description: string
    image: string
}

export interface Item {
    loading: string
    list: ItemData[]
    single: ItemData | null
}

const httpStatus = {
    idle: 'idle',
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected',
} as const

const initialState: Item = {
    loading: httpStatus.idle,
    list: [],
    single: null,
}

export const getList = createAsyncThunk<ItemData[], number | void>(
    `${namespace}/getList`,
    async (limit) => {
        const response = await fetch(
            `https://fakestoreapi.com/products/${
                limit ? `?limit=${limit}` : ''
            }`
        )
        return (await response.json()) as ItemData[]
    }
)

export const get = createAsyncThunk(`${namespace}/get`, async (id: number) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    return (await response.json()) as ItemData
})

const itemSlice = createSlice({
    name: namespace,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // list
        builder.addCase(getList.pending, (state) => {
            state.loading = httpStatus.pending
            state.list = []
            state.single = null
        })
        builder.addCase(getList.fulfilled, (state, { payload }) => {
            state.loading = httpStatus.fulfilled
            state.list = payload as ItemData[]
            state.single = null
        })

        // single
        builder.addCase(get.pending, (state) => {
            state.loading = httpStatus.pending
            // state.single = null;
        })
        builder.addCase(get.fulfilled, (state, { payload }) => {
            state.loading = httpStatus.fulfilled
            state.single = payload as ItemData
        })
    },
})

export default itemSlice.reducer
