import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../shared/hooks'
import { selectList } from '../items/item.selectors'
import { getList } from '../items/items.slice'
import { useEffect } from 'react'

const Search: React.FC = () => {
    const dispatch = useAppDispatch()
    const data = useAppSelector(selectList)

    useEffect(() => {
        dispatch(getList())
    }, [dispatch])

    return (
        <div className="d-flex flex-column bg-dark w-25">
            {data?.length &&
                data.map((item) => (
                    <Link key={item.id} to={`items/${item.id}`}>
                        {item.title}
                    </Link>
                ))}
        </div>
    )
}

export default Search
