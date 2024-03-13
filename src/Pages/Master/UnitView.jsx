import axios from "axios";
import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import {
  Input,
  Table,
  Button,
  Grid,
  GridRow,
  GridColumn,
  TableRow,
  TableBody,
  TableHeader,
  Header,
  TableHeaderCell,
  TableCell,
} from "semantic-ui-react";

export async function loader({ params }) {
  console.log(`inside loader unitview:`);
  //console.log(params);

  const data = await get_unit_info(params.unitId);
  //console.log(data);
  return data;
}
async function get_unit_info(id) {
  const info_pages = await axios.get(
    `https://arya-erp.in/simranapi/master/get_unit.php?unit=${id}`
  );
  console.log(info_pages.data);
  return info_pages.data;
}

const UnitView = () => {
  const { unit } = useLoaderData();
  console.log(`unitView::`);
  console.log(units_data);
  const navigate = useNavigate();

  const editParty = (id) => {
    console.log(id);
    navigate(`Edit`);
  };
  return (
    <div>
      <Grid verticalAlign="middle">
        <GridRow centered color="blue" style={{ fontWeight: "900" }}>
          <GridColumn textAlign="center" width={12}></GridColumn>
          <GridColumn
            floated="right"
            width={4}
            // color="red"
            textAlign="right"
            verticalAlign="middle"
          >
            <Button onClick={() => editParty(unit.id)}>Edit</Button>
            <Button>Delete</Button>
          </GridColumn>
        </GridRow>
        <GridRow centered>
          <Table style={{ maxWidth: "900px" }} celled>
            <TableBody>
              <TableRow>
                <TableCell style={{ fontWeight: "900" }}>Unit Name</TableCell>
                <TableCell>kilogram</TableCell>
                <TableCell style={{ fontWeight: "900" }}>Short Name</TableCell>
                <TableCell>KG</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </GridRow>
      </Grid>
    </div>
  );
};

export default UnitView;
