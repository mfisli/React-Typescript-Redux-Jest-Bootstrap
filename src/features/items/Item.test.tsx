import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import Item from './Item'
import { ItemData } from './items.slice'

describe('Item tests', () => {
    const fakeItem: ItemData = {
        id: 123,
        title: 'some title',
        price: 99.99,
        description: 'some description',
        category: 'some category',
        image: 'some image',
    }

    it('should render', () => {
        const component = render(
            <BrowserRouter>
                <Item data={fakeItem} />
            </BrowserRouter>
        )

        expect(component).toBeTruthy()
    })

    it('should have a title', () => {
        render(
            <BrowserRouter>
                <Item data={fakeItem} />
            </BrowserRouter>
        )
        const text = screen.getByText(fakeItem.title)
        expect(text).toBeInTheDocument()
    })

    it('should have a price', () => {
        render(
            <BrowserRouter>
                <Item data={fakeItem} />
            </BrowserRouter>
        )
        const text = screen.getByText(fakeItem.price, { exact: false })
        expect(text).toBeInTheDocument()
    })

    it('should have a category', () => {
        render(
            <BrowserRouter>
                <Item data={fakeItem} />
            </BrowserRouter>
        )
        const text = screen.getByText(fakeItem.category)
        expect(text).toBeInTheDocument()
    })

    it('should have a description', () => {
        render(
            <BrowserRouter>
                <Item data={fakeItem} />
            </BrowserRouter>
        )
        const text = screen.getByText(fakeItem.description)
        expect(text).toBeInTheDocument()
    })
})
