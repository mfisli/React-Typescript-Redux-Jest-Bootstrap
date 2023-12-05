import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { ItemData } from './items.slice'

const Item: React.FC<{ data: ItemData }> = ({ data }) => {
    return (
        data && (
            <Card className="border-0" style={{ width: '18rem' }}>
                <Link to={`/items/${data.id}`}>
                    <Card.Img
                        variant="top"
                        src={data.image}
                        style={{
                            width: '100%',
                            height: '15vw',
                            objectFit: 'contain',
                        }}
                    />
                </Link>
                <Card.Body className="border border-bottom-0 mt-5">
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                        <small className="d-block pb-2">{data.category}</small>
                        {data.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white border border-top-0 text-end">
                    <div className="d-flex justify-content-between align-items-baseline">
                        <span>${data.price}</span>
                        <Link to={`/items/${data.id}`}>
                            <Button variant="primary">More Details</Button>
                        </Link>
                    </div>
                </Card.Footer>
            </Card>
        )
    )
}

export default Item
