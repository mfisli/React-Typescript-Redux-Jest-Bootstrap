import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../shared/hooks'
import { selectList } from '../items/item.selectors'
import { ItemData, getList } from '../items/items.slice'
import Item from '../items/Item'

const FeaturedItems: React.FC = () => {
    const dispatch = useAppDispatch()
    const data = useAppSelector(selectList)

    useEffect(() => {
        dispatch(getList(3))
    }, [dispatch])

    return (
        <div className="row row-cols-3 g-4 d-flex justify-content-evenly w-100">
            {data &&
                data.length &&
                data.map((item: ItemData) => <Item data={item}></Item>)}
        </div>
    )
}

export default FeaturedItems
