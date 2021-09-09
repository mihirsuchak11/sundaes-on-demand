import axios from "axios";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import ScoopOption from "./ScoopOption";
import ToppingOptions from "./ToppingOptions";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  // optionType is 'scoops' or 'toppings'
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => setError(true));
  }, [optionType]);

  if (error) {
    // @ts-ignore
    return "Error";
  }

  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOptions;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return (
    <>
      {/* <h2>{title}</h2> */}
      {/* <p>{formatCurrency(pricePerItem[optionType])} each</p> */}
      <p>{/* {title} total: {orderDetails.totals[optionType]} */}</p>
      <Row>{optionItems}</Row>
    </>
  );
}
