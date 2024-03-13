import { useState } from "react";
//import data from "../../Data/data";
import { useAuth } from "../../hooks/useAuth";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { getPageInfo, getPageData } from "../../Double/fun";
import MasterUrl from "../../Consts/Master/MasterUrl.const";
import {
  Breadcrumb,
  BreadcrumbDivider,
  BreadcrumbSection,
} from "semantic-ui-react";
import "../../css/Master/master.css";
import axios from "axios";
import {
  Table,
  Input,
  Pagination,
  Button,
  Icon,
  Checkbox,
} from "semantic-ui-react";
import { get } from "underscore";

const header = [
  "Company Name",
  "Contact Person",
  "Address",
  "City",
  "State",
  "pin",
  "Role",
  "Land Line",
  "Mobile",
  "GST",
  "PAN",
  "Bank",
  "Account",
  "IFSC",
  "Opening Balance",
];

const records_per_page = 10;
//get total no of pages from items table

const totalRecords = await getPageInfo(axios, MasterUrl.getPageInfo, "party");

const totalPages = Math.ceil(totalRecords / records_per_page);

// loader function for Party
export async function loader() {
  const data = await getPageData(
    axios,
    MasterUrl.getPageData,
    records_per_page,
    1,
    "party"
  );

  return data;
}

async function new_contact() {
  const info_pages = await axios.get(
    `https://arya-erp.in/simranapi/master/party_new_contact.php?`
  );
  console.log(info_pages.data);
  return info_pages.data;
}

export default function Party() {
  const data = useLoaderData();
  const [pageData, setpageData] = useState(data);
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
      "party"
    );
    console.log(`newdata`);
    console.log(newpageData);
    setpageData(newpageData);
  };

  return (
    <>
      <Breadcrumb>
        <BreadcrumbSection as={Link} to="/">
          Home
        </BreadcrumbSection>
        <BreadcrumbDivider icon="right chevron" />
        <BreadcrumbSection as={Link} to="/master">
          Master
        </BreadcrumbSection>
        <BreadcrumbDivider icon="right chevron" />
        <BreadcrumbSection as={Link} to="master/party" active>
          Party
        </BreadcrumbSection>
      </Breadcrumb>
      {totalPages}
      {pageData}
    </>
  );
}
