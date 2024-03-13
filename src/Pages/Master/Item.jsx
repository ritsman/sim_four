import axios from "axios";
import React, { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { getPageInfo, getPageData } from "../../Double/fun";
import MasterUrl from "../../Consts/Master/MasterUrl.const";
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
import "../../css/Master/master.css";

const records_per_page = 10;
//get total no of pages from items table

const totalRecords = await getPageInfo(axios, MasterUrl.getPageInfo, "items");
const totalPages = Math.ceil(totalRecords / records_per_page);

// loader function for Unit
export async function loader() {
  const data = await getPageData(
    axios,
    MasterUrl.getPageData,
    records_per_page,
    1,
    "items"
  );
  //console.log(data);
  return data;
}

// main function====================================
export default function Item() {
  const data = useLoaderData();
  const [pageData, setpageData] = useState(data);
  const [showclass, setShowClass] = useState("noshow");

  const pageChange = async (event, data) => {
    console.log(event.target);
    console.log("pagenno:");
    console.log(event.target.text);
    console.log(data.activePage);
    const newpageData = await getPageData(
      axios,
      MasterUrl.getPageData,
      records_per_page,
      data.activePage,
      "items"
    );
    console.log(`newdata`);
    console.log(newpageData);
    setpageData(newpageData);
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
      {pageData.id}
      {totalPages}
    </div>
  );
}
