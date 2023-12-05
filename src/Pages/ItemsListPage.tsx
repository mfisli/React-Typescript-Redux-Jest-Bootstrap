import { useEffect } from 'react'
import Item from '../features/items/Item'
import { selectList } from '../features/items/item.selectors'
import { getList, ItemData } from '../features/items/items.slice'
import { useAppDispatch, useAppSelector } from '../shared/hooks'

const ItemsListPage: React.FC = () => {
    const dispatch = useAppDispatch()
    const data = useAppSelector(selectList)

    useEffect(() => {
        dispatch(getList(15))
    }, [dispatch])

    return (
        <section>
            <div className="container">
                <h1 className="py-5">Product Listing</h1>
                <div className="row row-cols-3 g-4 d-flex justify-content-evenly w-100">
                    {data &&
                        data.length &&
                        data.map((item: ItemData) => <Item data={item}></Item>)}
                </div>
            </div>
        </section>
    )
}

export default ItemsListPage
