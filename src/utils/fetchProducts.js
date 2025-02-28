import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import { fetchProducts } from '../redux/products/actions';

function FetchProducts(dispatch) {
    useEffect(function () {
      toast.promise(
        new Promise(resolve=>resolve(dispatch(fetchProducts()))),
  
        { pending: "loading", error: "error" }
      );
    }, [dispatch]);
  return ;
}

export default FetchProducts