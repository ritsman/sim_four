import React from "react";
import { Link } from "react-router-dom";
import { Card, CardGroup } from "semantic-ui-react";

export default function MasterIndex() {
  return (
    <div>
      <CardGroup itemsPerRow={4}>
        <Card className="modulecard" as={Link} to="party">
          <Card.Description textAlign="center" style={{ margin: "30px" }}>
            <Card.Header as="h3">Party</Card.Header>
            <Card.Description>
              Listing of all Customers and Vendors.
            </Card.Description>
          </Card.Description>
        </Card>

        <Card className="modulecard" as={Link} to="unit">
          <Card.Description textAlign="center" style={{ margin: "30px" }}>
            <Card.Header as="h3">Unit</Card.Header>
            <Card.Description>
              Listing of all Units of Measurement.
            </Card.Description>
          </Card.Description>
        </Card>

        <Card className="modulecard" as={Link} to="item">
          <Card.Description textAlign="center" style={{ margin: "30px" }}>
            <Card.Header as="h3">Item</Card.Header>
            <Card.Description>
              Listing of all Units of Measurement.
            </Card.Description>
          </Card.Description>
        </Card>

        <Card className="modulecard" href="#card-example-link-card">
          <Card.Description textAlign="center" style={{ margin: "30px" }}>
            <Card.Header as="h3">Elliot Baker</Card.Header>
            <Card.Description>
              Listing of all Units of Measurement.
            </Card.Description>
          </Card.Description>
        </Card>

        <Card className="modulecard" href="#card-example-link-card">
          <Card.Description textAlign="center" style={{ margin: "30px" }}>
            <Card.Header as="h3">Elliot Baker</Card.Header>
            <Card.Description>
              Listing of all Units of Measurement.
            </Card.Description>
          </Card.Description>
        </Card>

        <Card className="modulecard" href="#card-example-link-card">
          <Card.Description textAlign="center" style={{ margin: "30px" }}>
            <Card.Header as="h3">Elliot Baker</Card.Header>
            <Card.Description>
              Listing of all Units of Measurement.
            </Card.Description>
          </Card.Description>
        </Card>

        <Card className="modulecard" href="#card-example-link-card">
          <Card.Description textAlign="center" style={{ margin: "30px" }}>
            <Card.Header as="h3">Elliot Baker</Card.Header>
            <Card.Description>
              Listing of all Units of Measurement.
            </Card.Description>
          </Card.Description>
        </Card>

        <Card className="modulecard" href="#card-example-link-card">
          <Card.Description textAlign="center" style={{ margin: "30px" }}>
            <Card.Header as="h3">Elliot Baker</Card.Header>
            <Card.Description>
              Listing of all Units of Measurement.
            </Card.Description>
          </Card.Description>
        </Card>

        <Card className="modulecard" href="#card-example-link-card">
          <Card.Description textAlign="center" style={{ margin: "30px" }}>
            <Card.Header as="h3">Elliot Baker</Card.Header>
            <Card.Description>
              Listing of all Units of Measurement.
            </Card.Description>
          </Card.Description>
        </Card>

        <Card className="modulecard" href="#card-example-link-card">
          <Card.Description textAlign="center" style={{ margin: "30px" }}>
            <Card.Header as="h3">Elliot Baker</Card.Header>
            <Card.Description>
              Listing of all Units of Measurement.
            </Card.Description>
          </Card.Description>
        </Card>

        <Card className="modulecard" href="#card-example-link-card">
          <Card.Description textAlign="center" style={{ margin: "30px" }}>
            <Card.Header as="h3">Elliot Baker</Card.Header>
            <Card.Description>
              Listing of all Units of Measurement.
            </Card.Description>
          </Card.Description>
        </Card>

        <Card className="modulecard" href="#card-example-link-card">
          <Card.Description textAlign="center" style={{ margin: "30px" }}>
            <Card.Header as="h3">Elliot Baker</Card.Header>
            <Card.Description>
              Listing of all Units of Measurement.
            </Card.Description>
          </Card.Description>
        </Card>
      </CardGroup>
    </div>
  );
}
