import {
  Box,
  Button,
  Heading,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getProduct, getProductObj, postProduct } from "../Redux/action";

const AddProduct = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();

  const handleAdd = async () => {
    let obj = {
        image:image,
        name:name,
        gender:gender,
        description:desc,
        category:category,
        price:Number(price)
    };
    dispatch(postProduct(obj))
   
   
  };

  return (
    <Box>
      <Stack spacing={3}>
        <Input
          placeholder="Image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Input
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Product Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <Select
          placeholder="Select Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Select>
        <Select
          placeholder="Select Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {gender == "Male" ? (
            <>
              {" "}
              <option value="Shirts">Shirts</option>
              <option value="Jeans">Jeans</option>
              <option value="Trousers">Trousers</option>
              <option value="Suits">Suits</option>{" "}
            </>
          ) : (
            <>
              <option value="Saree">Saree</option>{" "}
              <option value="Kurti">Kurti</option>
              <option value="Lehenga">Lehenga</option>
              <option value="Jackets">Jackets</option>{" "}
            </>
          )}
        </Select>

        <Input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Button onClick={handleAdd}>Add Product</Button>
      </Stack>
    </Box>
  );
};

export default AddProduct;
