import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardDescription,
  CardGroup,
  Header,
  Icon,
} from "semantic-ui-react";

export default function MasterIndex({ setOpen }) {
  return (
    <div>
      <CardGroup itemsPerRow={4}>
        <Card href="#card-example-link-card" onClick={() => setOpen(false)}>
          <CardDescription textAlign="center" style={{ margin: "10px" }}>
            <Icon size="big" circular name="home" />
            <Header as="h1">Dashboard</Header>
          </CardDescription>
        </Card>
        <Card href="#card-example-link-card" onClick={() => setOpen(false)}>
          <CardDescription textAlign="center" style={{ margin: "10px" }}>
            <Icon size="big" circular name="home" />
            <Header as="h1">Admin</Header>
          </CardDescription>
        </Card>
        <Card href="#card-example-link-card" onClick={() => setOpen(false)}>
          <CardDescription textAlign="center" style={{ margin: "10px" }}>
            <Icon size="big" circular name="home" />
            <Header as="h1">Work Order</Header>
          </CardDescription>
        </Card>
        <Card href="#card-example-link-card" onClick={() => setOpen(false)}>
          <CardDescription textAlign="center" style={{ margin: "10px" }}>
            <Icon size="big" circular name="home" />
            <Header as="h1">Material Management</Header>
          </CardDescription>
        </Card>
        <Card href="#card-example-link-card" onClick={() => setOpen(false)}>
          <CardDescription textAlign="center" style={{ margin: "10px" }}>
            <Icon size="big" circular name="home" />
            <Header as="h1">Manufacturing</Header>
          </CardDescription>
        </Card>
        <Card href="#card-example-link-card" onClick={() => setOpen(false)}>
          <CardDescription textAlign="center" style={{ margin: "10px" }}>
            <Icon size="big" circular name="home" />
            <Header as="h1">Sales</Header>
          </CardDescription>
        </Card>
        <Card href="#card-example-link-card" onClick={() => setOpen(false)}>
          <CardDescription textAlign="center" style={{ margin: "10px" }}>
            <Icon size="big" circular name="home" />
            <Header as="h1">Inventory</Header>
          </CardDescription>
        </Card>
        <Card href="#card-example-link-card" onClick={() => setOpen(false)}>
          <CardDescription textAlign="center" style={{ margin: "10px" }}>
            <Icon size="big" circular name="home" />
            <Header as="h1">Money</Header>
          </CardDescription>
        </Card>
        <Card href="#card-example-link-card" onClick={() => setOpen(false)}>
          <CardDescription textAlign="center" style={{ margin: "10px" }}>
            <Icon size="big" circular name="home" />
            <Header as="h1">Inspection</Header>
          </CardDescription>
        </Card>
        <Card as={Link} to="/master" onClick={() => setOpen(false)}>
          <CardDescription textAlign="center" style={{ margin: "10px" }}>
            <Icon size="big" circular name="home" />
            <Header as="h1">Master</Header>
          </CardDescription>
        </Card>
        <Card href="#card-example-link-card" onClick={() => setOpen(false)}>
          <CardDescription textAlign="center" style={{ margin: "10px" }}>
            <Icon size="big" circular name="home" />
            <Header as="h1">Product Gallery</Header>
          </CardDescription>
        </Card>
        <Card href="#card-example-link-card" onClick={() => setOpen(false)}>
          <CardDescription textAlign="center" style={{ margin: "10px" }}>
            <Icon size="big" circular name="home" />
            <Header as="h1">Report</Header>
          </CardDescription>
        </Card>
      </CardGroup>
    </div>
  );
}
