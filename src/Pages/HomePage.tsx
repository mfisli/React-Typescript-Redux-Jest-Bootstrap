import { Button } from 'react-bootstrap'
import FeaturedItems from '../features/featuredItems/FeaturedItems'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
    return (
        <>
            <section className="pb-5">
                <div className="container">
                    <div className="hero d-flex w-100 justify-content-center">
                        <div className="py-5 text-center">
                            <img
                                src="https://www.footshop.eu/blog/wp-content/uploads/2021/02/1244398.jpg"
                                alt=""
                                height="400rem"
                            />
                            <h1>FAKE FASHION</h1>
                            <h2 className="pb-2">Dip Into Lit Drip</h2>
                            <p>
                                This is a fake store ment to showcase a front
                                end app created with React, Typescript, Redux
                                Tool Kit, and Bootstrap
                            </p>
                            <Link to={`/items`}>
                                <Button className="mt-4">Shop Now</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-light">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-4">
                            <img
                                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-8">
                            <div className="d-flex flex-column p-5 w-100">
                                <h2>Put On Something Nice</h2>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Rerum debitis impedit
                                    quidem unde cum in temporibus omnis libero
                                    perferendis facilis eaque iusto quibusdam
                                    ullam odio eos molestias, harum at
                                    aspernatur!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row pb-5">
                        <div className="col-8">
                            <div className="d-flex flex-column align-items-end p-5 w-100">
                                <h2>Lean Back and Chill</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Recusandae itaque culpa
                                    animi impedit sapiente minus expedita esse
                                    illum consectetur labore! Eius sint ducimus
                                    voluptate optio laboriosam dolor molestias
                                    debitis iusto?
                                </p>
                            </div>
                        </div>
                        <div className="col-4">
                            <img
                                src="https://images.unsplash.com/photo-1520013333831-acd77cc08fd3"
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-5">
                <div className="container py-5">
                    <h2>Featured Items</h2>
                    <p>
                        Check out our featured items - they won't be here for
                        long! Shop now.
                    </p>
                    <div className="d-flex w-100 pt-5">
                        <FeaturedItems />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage
