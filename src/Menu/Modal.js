import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import UserForm from './Form'

export const LogInModal = ({ handleSubmit }) => (
  <Modal trigger={<Button color="orange">Log In</Button>}>
    <Modal.Header>Please choose a Username and Password</Modal.Header>
    <Modal.Content>
      <UserForm handleSubmit={handleSubmit} type="Login"/>
    </Modal.Content>
  </Modal>
)

export const SignUpModal = ({ handleSubmit }) => (
  <Modal trigger={<Button color="orange">Sign Up</Button>}>
    <Modal.Header>Enter your Username and Password</Modal.Header>
    <Modal.Content>
      <UserForm handleSubmit={handleSubmit} type="Signup"/>
    </Modal.Content>
  </Modal>
)
