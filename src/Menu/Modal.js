import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import UserForm from './Form'

export const LogInModal = ({ handleSubmit, handleChange, username, password }) => (
  <Modal trigger={<Button color="orange">Log In</Button>}>
    <Modal.Header>Please enter your Username and Password</Modal.Header>
    <Modal.Content>
      <UserForm username={username} password={password} handleChange={handleChange} handleSubmit={handleSubmit} type="Login"/>
    </Modal.Content>
  </Modal>
)

export const SignUpModal = ({ handleSubmit, handleChange, username, password }) => (
  <Modal trigger={<Button color="orange">Sign Up</Button>}>
    <Modal.Header>Enter choose a Username and Password</Modal.Header>
    <Modal.Content>
      <UserForm username={username} password={password} handleChange={handleChange} handleSubmit={handleSubmit} type="Signup"/>
    </Modal.Content>
  </Modal>
)
