//tsrfc
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Product from '../../components/Product/Product';
import { AppDispatch, RootState } from '../../redux/configStore';
import { getProductApi, ProductModel } from '../../redux/reducers/productReducer';

type Props = {}

export default function HomeMobile({}: Props) {
    const { arrProduct } = useSelector(
        (state: RootState) => state.productReducer
      );
      const dispatch: AppDispatch = useDispatch();
      useEffect(() => {
        //call api = action thunk
        const actionApi = getProductApi();
        dispatch(actionApi);
      }, []);
    
      const renderProduct = () => {
        return arrProduct.map((prod: ProductModel, index: number) => {
          return (
            <div className='d-flex' key={index}>
                <div className='image w-25'>
                    <img className='w-100' src={prod.image} alt="..." />
                </div>
                <div className="content w-75">
                    <p>{prod.description}</p>
                    <button className='btn btn-dark'>View detail</button>
                </div>
                <hr />
            </div>
          );
        });
      };
      return (
        <div className="container">
          <h3 className="text-center">Shoes Shop</h3>
            {renderProduct()}
        </div>
      );
}