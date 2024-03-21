import axios from "axios";
import React, { useState } from "react";
import { getPageInfo, getPageData, putNewId } from "../../Double/fun";

import { MasterUrl } from "../../Consts/Master/MasterUrl.const";
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
  Label,
  Select,
} from "semantic-ui-react";
import * as XLSX from "xlsx/xlsx.mjs";

//get * from units table
const header = [" ", "Unit Name", "Short Name"];
const records_per_page = 10;

// loader function for Unit
export async function loader() {
  const data = await getPageData(
    axios,
    MasterUrl.getPageData,
    records_per_page,
    1,
    "unit"
  );
  // console.log(data);
  return data;
}
const totalRecords = await getPageInfo(axios, MasterUrl.getPageInfo, "unit");

const dropData = [
  { key: "3", value: "3", text: "3" },
  { key: "5", value: "5", text: "5" },
  { key: "10", value: "10", text: "10" },
  { key: "20", value: "20", text: "20" },
];

// main function====================================
export default function Unit() {
  const data = useLoaderData();
  const [pageData, setPageData] = useState(data);
  console.log(`unitsData:`);
  console.log(pageData);
  const [showclass, setShowClass] = useState("noshow");
  const chkstat = {};
  pageData.forEach((val, ind) => {
    //console.log(`v:${val.id}::i:${ind}`);
    chkstat[val.id] = false;
  });

  //console.log("-----");
  //console.log(chkstat);
  const [chkstat2, setChkStat2] = useState(chkstat);

  const navigate = useNavigate();

  const addNew = async () => {
    const id2 = await putNewId(axios, MasterUrl.putNewId, "unit");
    console.log(`id2:${id2}`);

    return navigate(`${id2}/Edit`);
    //return null;
  };

  const showCl = () => {
    const sh = showclass === "noshow" ? "nowshow" : "noshow";
    setShowClass(sh);
  };

  const leadSet = (event) => {
    let c = {};
    Object.keys(chkstat2).forEach((key) => {
      console.log(key);
      c[key] = event.target.checked;
    });
    console.log(`c:`);
    console.log(c);
    setChkStat2(c);
  };

  const setTick = (contact, event, data) => {
    console.log(chkstat2);
    chkstat2[contact.id] = data.checked;
    console.log(contact);
    console.log(chkstat2);
    const c = {
      ...chkstat2,
    };
    console.log(c);
    setChkStat2(c);
  };

  const delObj = () => {
    console.log(chkstat2);
    let t = [];
    Object.keys(chkstat2).forEach((key) => {
      if (chkstat2[key]) t.push(key);
    });
    console.log(`t::::`);
    console.log(t);
  };

  const pageChange = async (event, data) => {
    const newpageData = await getPageData(
      axios,
      MasterUrl.getPageData,
      records_per_page,
      data.activePage,
      "unit"
    );
    setpageData(newpageData);
  };

  const show_record = (id) => {
    console.log(`id:${id}`);

    navigate(`${id}`);
  };

  const editRecord = (e, data, id) => {
    console.log(e);
    console.log(data);
    console.log(id);
    //e.stopPropagation();

    navigate(`${id}/Edit`);
    e.preventDefault();
    e.stopPropagation();
  };

  const handleExportData = () => {
    console.log(pageData);
    let wb = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet(pageData);
    XLSX.utils.book_append_sheet(wb, ws, "UnitDataSheet");

    XLSX.writeFile(wb, "MyExcel.xlsx");
  };

  //get total no of pages from items table
  //const totalPages = Math.ceil(totalRecords / records_per_page);
  const [perPage, setPerPage] = useState(records_per_page);
  //const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalRecords / perPage);

  // const startIndex = (currentPage - 1) * perPage;
  // const endIndex = startIndex + perPage;
  // const currentData = pageData.slice(startIndex, endIndex);

  const handlePerPageChange = async (e) => {
    setPerPage(parseInt(e.target.value));
    console.log(e.target.value);
    console.log(perPage);
    let perpageData = await getPageData(
      axios,
      MasterUrl.getPageData,
      perPage,
      1,
      "unit"
    );
    console.log("perpage");
    console.log(perPage);
    setpageData(perpageData);
    //setCurrentPage(1);
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
        <BreadcrumbSection active>Unit</BreadcrumbSection>
      </Breadcrumb>
      <Grid verticalAlign="middle">
        <GridRow centered color="blue" style={{ fontWeight: "900" }}>
          <GridColumn
            floated="right"
            width={6}
            // color="red"
            textAlign="right"
            verticalAlign="middle"
          >
            <Label style={{ padding: "8px" }}>
              Records per page:
              <select value={perPage} onChange={(e) => handlePerPageChange(e)}>
                <option value={3}>3</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
              </select>
              {/* <Select options={dropData} /> */}
            </Label>
            <Button onClick={handleExportData}>Export</Button>
            <Button color="teal" onClick={showCl}>
              Modify
            </Button>
            <Button color="red" className={showclass} onClick={delObj}>
              Delete
            </Button>
            <Button color="green" onClick={addNew} className={showclass}>
              Add New
            </Button>
          </GridColumn>
        </GridRow>
        <GridRow centered>
          <Table style={{ maxWidth: "1490px" }}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell
                  className={showclass}
                  //style={{ overflowX: "hidden" }}
                >
                  <input type="checkbox" onChange={(event) => leadSet(event)} />
                </Table.HeaderCell>
                {header.map((h) => (
                  <Table.HeaderCell key={h}>{h}</Table.HeaderCell>
                ))}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {pageData.map((contact) => (
                <Table.Row
                  onClick={() => show_record(contact.id)}
                  key={contact.id}
                >
                  <Table.Cell>
                    <Checkbox
                      className={showclass}
                      checked={chkstat2[contact.id]}
                      onChange={(event, data) => setTick(contact, event, data)}
                      name={contact.id}
                    />
                  </Table.Cell>
                  <Table.Cell>{contact.unit_name}</Table.Cell>
                  <Table.Cell>{contact.short_name}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </GridRow>
      </Grid>
      <Pagination
        floated="right"
        defaultActivePage={1}
        totalPages={totalPages}
        onPageChange={pageChange}
      />
    </>
  );
}
