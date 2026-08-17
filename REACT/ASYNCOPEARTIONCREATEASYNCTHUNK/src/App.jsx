import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './redux/productsSlice'
import Card from './Card'

export default function App() {
    const dispatch = useDispatch()
    const { data, error, loading } = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    if (loading) {
        return <h2 className="status">Loading...</h2>
    }

    if (error) {
        return <h2 className="status error">{error}</h2>
    }

    return (
        <div className="products">
            {data.map((elem) => {
                return (
                    <Card
                        key={elem.id}
                        title={elem.title}
                        p={elem.description}
                        category={elem.category}
                        img={elem.thumbnail}
                        price={elem.price}
                        rating={elem.rating}
                        brand={elem.brand}
                    />
                )
            })}
        </div>
    )
}