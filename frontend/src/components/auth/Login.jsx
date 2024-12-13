import React from 'react';
import { Modal, Button, Form, Icon } from 'semantic-ui-react';

function LoginModal({ isOpen, onClose, onLogin }) {
  return (
    <Modal open={isOpen} onClose={onClose} size="tiny">
      <Modal.Header>
        <Icon name="user circle" /> Login
      </Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input
            icon="user"
            iconPosition="left"
            label="Username"
            placeholder="Enter your username"
          />
          <Form.Input
            icon="lock"
            iconPosition="left"
            type="password"
            label="Password"
            placeholder="Enter your password"
          />
          <Button primary fluid onClick={onLogin}>
            Login
          </Button>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onClose}>Cancel</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default LoginModal;
