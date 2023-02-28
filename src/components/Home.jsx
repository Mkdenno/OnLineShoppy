import React from 'react'
// import { useSelector } from 'react-redux'
import { useGetAllProductsQuery } from '../features/productsApi'

const Home = () => {
//  const {items, status}= useSelector(state=> state.products)
  const {data, error, isLoading}=useGetAllProductsQuery()
  console.log(data)
  return (
    <div>Home</div>
  )
}

export default Home