import React, { useEffect } from "react";
import AdminSideBar from "../components/AdminSideBar";
import { Navigate, Outlet } from "react-router";
import { useDispatch } from "react-redux";
import { fetchOrdersAction } from "../redux/orders/actions";

function AdminLayout() {
    const admin=true

    const disptach=useDispatch()
    useEffect(function(){
        disptach(fetchOrdersAction())

    },[])
    if(!admin){
      return  <Navigate to={"/"}/>
    }
 
  return (
    <div>

      <AdminSideBar />
      <Outlet />
    </div>
  );
}

export default AdminLayout;
