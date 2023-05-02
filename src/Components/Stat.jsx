import React, { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Box, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/action";

ChartJS.register(ArcElement, Tooltip, Legend);

const Stats = () => {
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct);
  }, []);

  const male = products.filter((el) => {
    return el.gender === "Male";
  });
  const Female = products.filter((el) => {
    return el.gender === "Female";
  });

  const data = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "# of Votes",
        data: [],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  data.datasets[0].data.push(male.length);
  data.datasets[0].data.push(Female.length);

  const data2 = {
    labels: [
      "Shirts",
      "Jeans",
      "Trousers",
      "Suits",
      "Saree",
      "Kurti",
      "Lehenga",
      "Jackets",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const Shirts = products.filter((el) => {
    return el.category === "Shirts";
  });
  const Trousers = products.filter((el) => {
    return el.category === "Trousers";
  });
  const Jeans = products.filter((el) => {
    return el.category === "Jeans";
  });
  const Suits = products.filter((el) => {
    return el.category === "Suits";
  });
  const Saree = products.filter((el) => {
    return el.category === "Saree";
  });
  const Kurti = products.filter((el) => {
    return el.category === "Kurti";
  });
  const Lehenga = products.filter((el) => {
    return el.category === "Lehenga";
  });
  const Jackets = products.filter((el) => {
    return el.category === "Jackets";
  });

  data2.datasets[0].data.push(Shirts.length);
  data2.datasets[0].data.push(Jeans.length);
  data2.datasets[0].data.push(Trousers.length);
  data2.datasets[0].data.push(Suits.length);
  data2.datasets[0].data.push(Saree.length);
  data2.datasets[0].data.push(Kurti.length);
  data2.datasets[0].data.push(Lehenga.length);
  data2.datasets[0].data.push(Jackets.length);

  return (
    <Flex w={"80%"} h={"500px"} justifyContent={"space-between"}>
      <Pie data={data} />
      <Pie data={data2} />
    </Flex>
  );
};

export default Stats;
