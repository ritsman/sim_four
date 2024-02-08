import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbDivider,
  BreadcrumbSection,
} from "semantic-ui-react";
export default function Unit() {
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
      Unit
    </div>
  );
}
