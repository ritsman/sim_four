import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Checkbox,
  Grid,
  Input,
  Icon,
  Table,
  Button,
  GridRow,
  GridColumn,
  TableRow,
  TableBody,
  TableHeader,
  Header,
  TableHeaderCell,
  TableCell,
  Breadcrumb,
  BreadcrumbDivider,
  BreadcrumbSection,
  Pagination,
} from "semantic-ui-react";

const records_per_page = 10;
async function getPageData(records, pageno, mod2) {
  let data = await axios.post(
    `https://arya-erp.in/simranapi/master/getPageData.php`,
    {
      records: records,
      pageno: pageno,
      mod2: mod2,
    }
  );

  return data.data;
}
// loader function for tUnit
export async function loader() {
  const data = await getPageData(records_per_page, 1, "units");
  console.log(data);
  return data;
}

const ItemView = () => {
  const [showclass, setShowClass] = useState("noshow");
  const showCl = () => {
    const sh = showclass === "noshow" ? "nowshow" : "noshow";
    setShowClass(sh);
  };

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbSection as={Link} to="/">
          Home
        </BreadcrumbSection>
        <BreadcrumbDivider icon="right chevron" />
        <BreadcrumbSection as={Link} to="/master">
          Master
        </BreadcrumbSection>
        <BreadcrumbDivider icon="right chevron" />
        <BreadcrumbSection active>Item</BreadcrumbSection>
      </Breadcrumb>
      <div>
        <Button color="teal" onClick={showCl}>
          Modify
        </Button>
        <Button color="red" className={showclass}>
          Delete
        </Button>
        <Button primary className={showclass}>
          Add New
        </Button>
      </div>
    </div>
  );
};

export default ItemView;
