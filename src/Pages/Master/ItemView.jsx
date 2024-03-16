import axios from "axios";
import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import {
  Table,
  Button,
  Grid,
  GridRow,
  GridColumn,
  TableRow,
  TableBody,
  TableCell,
  Message,
  MessageHeader,
} from "semantic-ui-react";
import { MasterUrl } from "../../Consts/Master/MasterUrl.const";
import { getIdEntry } from "../../Double/fun";
//import "./partyForm.css";

export async function loader({ params }) {
  console.log(`inside loader itemview:`);
  //console.log(params);

  const data = await getIdEntry(
    axios,
    MasterUrl.getIdEntry,
    params.itemId,
    "items"
  );
  console.log(data);
  return data;
}

const ItemView = () => {
  const item = useLoaderData();
  console.log(`itemView::`);
  console.log(item);

  const navigate = useNavigate();

  const editItem = (id) => {
    console.log(id);
    navigate(`Edit`);
  };

  const [del, setDel] = useState(false);

  const deleteItem = (id) => {
    console.warn("inside delete");
    console.log(id);
    setDel(true);
  };

  return (
    <div>
      <Grid verticalAlign="middle">
        <GridRow centered color="blue" style={{ fontWeight: "900" }}>
          <GridColumn textAlign="center" width={12}>
            {item.name}
          </GridColumn>
          <GridColumn
            floated="right"
            width={4}
            // color="red"
            textAlign="right"
            verticalAlign="middle"
          >
            <Button onClick={() => editItem(item.id)}>Edit</Button>
            <Button onClick={() => deleteItem(item.id)}>Delete</Button>
          </GridColumn>
        </GridRow>
        <GridRow centered>
          <Table
            celled
            className="borderless-table"
            basic="very"
            //collapsing
            style={{ maxWidth: "1200px" }}
          >
            <TableBody>
              <TableRow>
                <TableCell style={{ fontWeight: "900", marginRight: "10px" }}>
                  Type
                </TableCell>

                <TableCell>{item.item_type}</TableCell>

                <TableCell style={{ fontWeight: "900" }}>Color</TableCell>

                <TableCell>{item.item_color}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontWeight: "900" }}>Price</TableCell>

                <TableCell>{item.rate}</TableCell>

                <TableCell style={{ fontWeight: "900" }}>Item Select</TableCell>

                <TableCell>
                  {item.item_select} {item.issue_unit}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontWeight: "900" }}>HSN Code</TableCell>

                <TableCell>{item.hsn_code}</TableCell>

                <TableCell style={{ fontWeight: "900" }}>MOQ</TableCell>

                <TableCell>{item.moq}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontWeight: "900" }}>
                  Date of Creation
                </TableCell>

                <TableCell>{item.dtd}</TableCell>

                <TableCell style={{ fontWeight: "900" }}>Created By</TableCell>

                <TableCell>{item.user}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </GridRow>
      </Grid>
      {del && (
        <Message warning style={{ textAlign: "center" }}>
          <MessageHeader>
            Are you sure you want to delete this entry?
          </MessageHeader>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button>Yes</Button>
            <Button>No</Button>
          </div>
        </Message>
      )}
    </div>
  );
};

export default ItemView;
