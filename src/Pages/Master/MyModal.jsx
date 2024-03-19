import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Input,
  Icon,
  Label,
  Button,
  Modal,
  ModalHeader,
  ModalContent,
  ModalDescription,
  Header,
  ModalActions,
  Image,
} from "semantic-ui-react";

const MyModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Show Modal</Button>}
      >
        <ModalHeader>Select a Photo</ModalHeader>
        <ModalContent image>
          <Image
            size="medium"
            src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
            wrapped
          />
          <ModalDescription>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your
              e-mail address.
            </p>
            <p>Is it okay to use this photo?</p>
          </ModalDescription>
        </ModalContent>
        <ModalActions>
          <Button color="black" onClick={() => setOpen(false)}>
            Nope
          </Button>
          <Button
            content="Yep, that's me"
            labelPosition="right"
            icon="checkmark"
            onClick={() => setOpen(false)}
            positive
          />
        </ModalActions>
      </Modal>
    </div>
  );
};

export default MyModal;
