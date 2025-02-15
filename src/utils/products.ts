// utils/products.ts
import productData from "@/data/products-data.json";
import { Product } from "@/types/products";

export const getProducts = (): Product[] => {
  const productMap: { [productId: string]: Product } = {};

  productData.data.forEach((item) => {
    item.line_items.forEach((lineItem) => {
      const productId = lineItem.product_id;
      const skuName = lineItem.sku_name;

      if (!productMap[productId]) {
        productMap[productId] = {
          _id: item._id,
          product_id: productId,
          product_name: lineItem.product_name,
          sale_price: lineItem.sale_price,
          sku_image: lineItem.sku_image,
          sku_name: skuName,
          original_price: lineItem.original_price,
          department: item.department ? item.department.name : "N/A",
          display_status: lineItem.display_status,
          sizes: [],
          colors: [],
        };
      }

      // Extract size and color from sku_name
      const [color, size] = skuName.split(",").map((s) => s.trim()); // Split sku_name string, Black, Hoodie ( Only Black )-L
      if (color && !productMap[productId].colors.includes(color)) {
        productMap[productId].colors.push(color);
      }
      if (size && !productMap[productId].sizes.includes(size)) {
        productMap[productId].sizes.push(size);
      }
    });
  });

  return Object.values(productMap);
};

export const getProductById = (productId: string): Product | undefined => {
  const products = getProducts();
  return products.find((product) => product.product_id === productId);
};
