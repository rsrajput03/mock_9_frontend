import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Td,
  Box,
  Th,
  Tbody,
  Img,
  Select,
} from "@chakra-ui/react";
import AddProduct from "./AddProduct";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteObj,
  deleteProduct,
  getProduct,
  getProductcat,
} from "../Redux/action";

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const products = useSelector((store) => store.products);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <>
      <Box>
        <Select placeholder="Select Gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Select>

        <Select placeholder="Select Category">
          <option value="Shirts">Shirts</option>
          <option value="Jeans">Jeans</option>
          <option value="Trousers">Trousers</option>
          <option value="Suits">Suits</option>{" "}
          <option value="Saree">Saree</option>{" "}
          <option value="Kurti">Kurti</option>
          <option value="Lehenga">Lehenga</option>
          <option value="Jackets">Jackets</option>{" "}
        </Select>
      </Box>
      <Button onClick={onOpen}>Add Product</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddProduct />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Table */}

      <Box>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Image</Th>
                <Th>Product Name</Th>
                <Th>Product Description</Th>
                <Th>Gender</Th>
                <Th>Category</Th>
                <Th>Price</Th>
                <Th>Edit</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.length > 0 &&
                products.map((el) => {
                  return (
                    <Tr key={el.id}>
                      <Td>
                        <img
                          width={"150px"}
                          height={"100px"}
                          src={el.image}
                          alt=""
                        />
                      </Td>
                      <Td>{el.name}</Td>
                      <Td>{el.description}</Td>
                      <Td>{el.gender}</Td>
                      <Td>{el.category}</Td>
                      <Td>{el.price}</Td>
                      <Td>
                        {" "}
                        <Button>Edit</Button>{" "}
                      </Td>
                       <Td onClick={()=>handleDelete(el.id)}>
                        <Button>Delete</Button>
                      </Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Dashboard;
