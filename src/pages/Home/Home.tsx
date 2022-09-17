//tsrfc
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Product from '../../components/Product/Product';
import { AppDispatch, RootState } from '../../redux/configStore';
import { getProductApi, ProductModel } from '../../redux/reducers/productReducer';

type Props = {
    title?:string;
}

export default function Home({title}: Props) {

  const {arrProduct} = useSelector((state:RootState)=>state.productReducer)
  const dispatch:AppDispatch = useDispatch();
  useEffect(()=>{
    //call api = action thunk
    const actionApi = getProductApi();
    dispatch(actionApi);

  },[])

  const renderProduct = () => {

    return arrProduct.map((prod:ProductModel,index:number)=>{
      return <div className='col-4 mt-2' key={index}>
          <Product product={prod} />
      </div>
    })
  }

  return (
    <div className='container'>
      <h3 className='text-center'>Shoes Shop</h3>
      <div className='row'>
        {renderProduct()}
      </div>
    </div>
  )
}