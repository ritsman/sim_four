import {
  useLoaderData,
  Link,
  Form,
  redirect,
  useNavigate,
} from "react-router-dom";
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
  Breadcrumb,
  BreadcrumbDivider,
  BreadcrumbSection,
} from "semantic-ui-react";

import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export async function loader({ params }) {
  console.log(`inside loader unitview:`);
  //console.log(params);

  const data = await get_unit_info(params.unitId);
  console.log(data);
  return data;
}
async function get_unit_info(id) {
  const data = await axios.get(
    `https://arya-erp.in/simranapi/master/get_unit_single.php?unit=${id}`
  );
  console.log(data.data);
  return data.data;
}

export default function UnitView() {
  const unit_data = useLoaderData();
  const navigate = useNavigate();
  const editUnit = (id) => {
    console.log(id);
    navigate(`Edit`);
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
        <BreadcrumbSection active>Unit</BreadcrumbSection>
      </Breadcrumb>
      <Grid verticalAlign="middle">
        <GridRow centered color="blue" style={{ fontWeight: "900" }}>
          <GridColumn textAlign="center" width={12}>
            {unit_data.unit_name}
          </GridColumn>
          <GridColumn
            floated="right"
            width={4}
            // color="red"
            textAlign="right"
            verticalAlign="middle"
          >
            <Button onClick={() => editUnit(unit_data.id)}>Edit</Button>
            <Button>Delete</Button>
          </GridColumn>
        </GridRow>
        <GridRow centered>
          <Table style={{ maxWidth: "900px" }} celled>
            <TableBody>
              <TableRow>
                <TableCell>{unit_data.unit_name}</TableCell>
                <TableCell>{unit_data.short_name}</TableCell>
              </TableRow>
              <TableRow></TableRow>
              <TableRow></TableRow>
            </TableBody>
          </Table>
        </GridRow>
      </Grid>
    </div>
  );
}
