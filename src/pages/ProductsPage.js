import React from "react";
import ProductCard from "../components/ProductCard";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {}
}));

const ProductsPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductsPage;
