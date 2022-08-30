import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../layouts/DefaultLayout";
import { fetchProductsAction } from "./productAction";

export const NBA = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductsAction());
  }, [dispatch]);
  return <DefaultLayout>NBA</DefaultLayout>;
};
