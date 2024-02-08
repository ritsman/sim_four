import React from "react";
import { Link } from "react-router-dom";
import { Card, CardGroup } from "semantic-ui-react";

export default function MasterIndex() {
  return (
    <div>
      <CardGroup itemsPerRow={4}>
        <Card
          as={Link}
          to="party"
          header="Party"
          meta="Friend"
          description="Listing of all Customers and Vendors."
        />
        <Card
          as={Link}
          to="unit"
          header="Units"
          meta="Friend"
          description="Listing of all Units of Measurement."
        />
        <Card
          href="#card-example-link-card"
          header="Elliot Baker"
          meta="Friend"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        />
        <Card
          href="#card-example-link-card"
          header="Elliot Baker"
          meta="Friend"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        />
        <Card
          href="#card-example-link-card"
          header="Elliot Baker"
          meta="Friend"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        />
        <Card
          href="#card-example-link-card"
          header="Elliot Baker"
          meta="Friend"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        />
        <Card
          href="#card-example-link-card"
          header="Elliot Baker"
          meta="Friend"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        />
        <Card
          href="#card-example-link-card"
          header="Elliot Baker"
          meta="Friend"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        />
        <Card
          href="#card-example-link-card"
          header="Elliot Baker"
          meta="Friend"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        />
        <Card
          href="#card-example-link-card"
          header="Elliot Baker"
          meta="Friend"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        />
        <Card
          href="#card-example-link-card"
          header="Elliot Baker"
          meta="Friend"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        />
        <Card
          href="#card-example-link-card"
          header="Elliot Baker"
          meta="Friend"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        />
      </CardGroup>
    </div>
  );
}
