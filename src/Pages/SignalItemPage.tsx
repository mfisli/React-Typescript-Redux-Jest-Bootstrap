import { useEffect } from 'react'
import { selectSingle } from '../features/items/item.selectors'
import { get } from '../features/items/items.slice'
import { useAppDispatch, useAppSelector } from '../shared/hooks'
import { Link, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const SingleProductPage: React.FC = () => {
    const dispatch = useAppDispatch()
    const data = useAppSelector(selectSingle)

    const { id } = useParams()

    useEffect(() => {
        if (id) {
            dispatch(get(parseInt(id)))
        }
    }, [dispatch])

    return (
        <section>
            <div className="container">
                <Link to={`/items`} className="d-block pt-3">
                    Back to product listing
                </Link>
                <div className="row">
                    <div className="col-4 mt-4">
                        <img
                            className="img-fluid p-2"
                            src={data?.image}
                            alt=""
                        />
                    </div>
                    <div className="col-8">
                        <div className="ps-4">
                            <h1 className="mt-5">{data?.title}</h1>
                            <div>
                                <div className="fs-2 pb-3">${data?.price}</div>
                                <Button>Buy Now</Button>
                            </div>
                            <div className="d-flex flex-column">
                                <small className="pt-4">{data?.category}</small>
                                <p className="pt-2">{data?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleProductPage
