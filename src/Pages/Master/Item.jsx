import axios from "axios";
import React, { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
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

const header = [
  "Item Name",
  "Item Select",
  "Item Type",
  "Item Color",
  "Specification",
  "MOQ",
  "Buffer Unit",
  "Purchase Unit",
  "Issue Unit",
  "GST",
  "Rate",
  "HSN Code",
  "Msc1",
  "Msc2",
];
const records_per_page = 10;
//get total no of pages from items table
async function total_no_of_pages(mod2) {
  const data = await axios.post(
    `https://arya-erp.in/simranapi/master/getPageInfo.php`,
    {
      mod2: mod2,
    }
  );
  //console.log(data.data);

  return data.data;
}
const totalRecords = await total_no_of_pages("items");
const totalPages = Math.ceil(totalRecords / records_per_page);

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
  const data = await getPageData(records_per_page, 1, "items");
  console.log(data);
  return data;
}

// main function====================================
export default function Item() {
  const data = useLoaderData();
  const navigate = useNavigate();
  const [pageData, setpageData] = useState(data);
  const [showclass, setShowClass] = useState("noshow");
  const showCl = () => {
    const sh = showclass === "noshow" ? "nowshow" : "noshow";
    setShowClass(sh);
  };
  const [items, setitems] = useState(data);

  console.log(`items222:`);
  console.log(items);
  const chkstat = {};
  items.forEach((val, ind) => {
    console.log(`v:${val.id}::i:${ind}`);
    chkstat[val.id] = false;
  });

  console.log("-----");
  console.log(chkstat);
  const [chkstat2, setChkStat2] = useState(chkstat);

  const pageChange = async (event, data) => {
    console.log(event.target);
    console.log("pagenno:");
    console.log(event.target.text);
    console.log(data.activePage);
    const newpageData = await getPageData(
      records_per_page,
      data.activePage,
      "items"
    );
    console.log(`newdata`);
    console.log(newpageData);
    setpageData(newpageData);
  };
  const show_record = (id) => {
    console.log(`id:${id}`);

    navigate(`${id}`);
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
      <br />
      {pageData.id}
      {totalPages}
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
      <div style={{ overflowX: "scroll" }}>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell className={showclass}>
                <input type="checkbox" onChange={(event) => leadSet(event)} />
              </Table.HeaderCell>
              {header.map((h) => (
                <Table.HeaderCell key={h}>{h}</Table.HeaderCell>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {items.map((item) => (
              <Table.Row onClick={() => show_record(item.id)} key={item.id}>
                <Table.Cell>
                  <Checkbox
                    checked={chkstat2[item.id]}
                    onChange={(event, data) => setTick(item, event, data)}
                    name={item.id}
                  />
                </Table.Cell>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.item_type}</Table.Cell>
                <Table.Cell>{item.item_color}</Table.Cell>
                <Table.Cell>{item.buffer_unit}</Table.Cell>
                <Table.Cell>{item.hsn_code}</Table.Cell>
                <Table.Cell>{item.issue_unit}</Table.Cell>
                <Table.Cell>{item.item_select}</Table.Cell>
                <Table.Cell>{item.moq}</Table.Cell>
                <Table.Cell>{item.msc1}</Table.Cell>
                <Table.Cell>{item.msc2}</Table.Cell>
                <Table.Cell>{item.gst}</Table.Cell>
                <Table.Cell>{item.opening_stock}</Table.Cell>
                <Table.Cell>{item.rate}</Table.Cell>
                {/* <Table.Cell>{item.account}</Table.Cell>
                <Table.Cell>{item.ifsc}</Table.Cell>
                <Table.Cell>{item.open_bal}</Table.Cell> */}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
      <Pagination
        defaultActivePage={1}
        totalPages={totalPages}
        onPageChange={pageChange}
      />
    </div>
  );
}
