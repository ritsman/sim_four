import React, { useState } from "react";
import { Form, Message } from "semantic-ui-react";
import "../css/Master/master.css";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log(`updates:`);
  console.log(updates);
  return 0;
}

export default function UserFormParty() {
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Perform form submission action here
    setSubmitted(true);
  };

  return (
    <>
      <Form method="post">
        <div className="ui grid">
          <div className="six wide column ui large icon input">
            <input
              type="text"
              name="companyname"
              placeholder="Company Name"
              style={{ width: "800px" }}
            />
          </div>
          <div className="six wide column ui large icon input">
            <input
              type="email"
              name="email"
              placeholder="Email"
              style={{ width: "800px" }}
            />
          </div>
          <div className="four wide column ui large icon input">
            <input
              type="text"
              name="bank"
              placeholder="Bank"
              style={{ width: "800px" }}
            />
          </div>
          <div className="four wide column ui large icon input">
            <input
              type="text"
              name="contactperson"
              placeholder="Contact Person"
              style={{ width: "800px" }}
            />
          </div>
          <div className="four wide column ui large icon input">
            <input
              type="tel"
              name="landline"
              placeholder="Land Line"
              style={{ width: "800px" }}
            />
          </div>
          <div className="four wide column ui large icon input">
            <input
              type="text"
              name="account"
              placeholder="Account"
              style={{ width: "800px" }}
              required
            />
          </div>
          <div className="four wide column ui large icon input">
            <input
              type="text"
              name="mobile"
              placeholder="Mobile"
              style={{ width: "800px" }}
              required
            />
          </div>
          <div className="four wide column ui large icon input">
            <input
              type="text"
              name="address"
              placeholder="Address"
              style={{ width: "800px" }}
              required
            />
          </div>
          <div className="three wide column ui large icon input">
            <input
              type="text"
              name="ifsc"
              placeholder="Ifsc"
              style={{ width: "800px" }}
              required
            />
          </div>
          <div className="three wide column ui large icon input">
            <input
              type="text"
              name="city"
              placeholder="City"
              style={{ width: "800px" }}
              required
            />
          </div>
          <div className="three wide column ui large icon input">
            <input
              type="text"
              name="gst"
              placeholder="Gst"
              style={{ width: "800px" }}
              required
            />
          </div>
          <div className="three wide column ui large icon input">
            <input
              type="text"
              name="openingbalance"
              placeholder="Opening Balance"
              style={{ width: "800px" }}
              required
            />
          </div>
          <div
            class=" three wide column ui large icon input"
            style={{
              width: "120px",
              height: "40px",
              marginTop: "10px",
              paddingTop: "10px",
              marginLeft: "13px",
              marginRight: "30px",
            }}
          >
            <select class="ui dropdown">
              <option value="">Role</option>
              <option value="1">Supplier</option>
              <option value="0">Buyer</option>
              <option value="0">Vendor</option>
            </select>
          </div>
          <div className="four wide column ui large icon input">
            <input
              type="text"
              name="state"
              placeholder="State"
              style={{ width: "800px" }}
              required
            />
          </div>
          <div className="four wide column ui large icon input">
            <input
              type="text"
              name="pan"
              placeholder="Pan"
              style={{ width: "800px" }}
              required
            />
          </div>
          <div className="four wide column ui large icon input">
            <input
              type="text"
              name="pin"
              placeholder="Pin"
              style={{ width: "800px" }}
              required
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "36px",
          }}
        >
          <button
            type="submit"
            primary
            className="ui button"
            style={{ marginRight: "20px" }}
            onClick={handleFormSubmit}
          >
            Submit
          </button>
          <button
            type="submit"
            className="ui button"
            onClick={handleFormSubmit}
          >
            Cancel
          </button>
        </div>
      </Form>
      {/* Conditional rendering of message */}
      {submitted && (
        <div className="ui message">
          <div className="header">New Site Features</div>
          <ul className="list">
            <li>You can now have cover images on blog pages</li>
            <li>Drafts will now auto-save while writing</li>
          </ul>
        </div>
      )}
    </>
  );
}
