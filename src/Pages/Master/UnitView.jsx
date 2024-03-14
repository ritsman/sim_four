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
  TableCell,
} from "semantic-ui-react";
import { MasterUrl } from "../../Consts/Master/MasterUrl.const";
import { getIdEntry } from "../../Double/fun";

export async function loader({ params }) {
  console.log(`inside loader unitview:`);
  //console.log(params);

  const data = await getIdEntry(
    axios,
    MasterUrl.getIdEntry,
    params.unitId,
    "unit"
  );
  //console.log(data);
  return data;
}

const UnitView = () => {
  const unit = useLoaderData();

  console.log(`unitView::`);
  console.log(unit);

  const navigate = useNavigate();

  const editUnit = (id) => {
    //console.log(id);
    navigate(`Edit`);
  };
  return (
    <div>
      <Grid verticalAlign="middle">
        <GridRow centered color="blue" style={{ fontWeight: "900" }}>
          <GridColumn textAlign="center" width={12}>
            {unit.unit_name}
          </GridColumn>
          <GridColumn
            floated="right"
            width={4}
            // color="red"
            textAlign="right"
            verticalAlign="middle"
          >
            <Button onClick={() => editUnit(unit.id)}>Edit</Button>
            <Button>Delete</Button>
          </GridColumn>
        </GridRow>
        <GridRow centered>
          <Table style={{ maxWidth: "900px" }} celled>
            <TableBody>
              <TableRow>
                <TableCell style={{ fontWeight: "900" }}>Unit Name</TableCell>
                <TableCell>{unit.unit_name}</TableCell>
                <TableCell style={{ fontWeight: "900" }}>Short Name</TableCell>
                <TableCell>{unit.short_name}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </GridRow>
      </Grid>
    </div>
  );
};

export default UnitView;
