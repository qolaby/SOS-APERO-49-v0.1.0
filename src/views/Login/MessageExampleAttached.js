import React from 'react'
import { Button, Form, Message } from 'semantic-ui-react'

const MessageExampleAttached = () => (
  <div>
    <Message
      attached
      header='Bienvenue Chez SOS APERO49!'
      content='S&#39;enregistrer rapporte plein de bonus alors qu&#39;attendez-vous!'
    />
    <Form className='attached fluid segment'>
      <Form.Group widths='equal'>
        <Form.Input fluid label='Prenom' placeholder='Votre Prenom' type='text' />
        <Form.Input fluid label='Nom' placeholder='Votre Nom' type='text' />
      </Form.Group>
      <Form.Input label='Username' placeholder='Username' type='text' />
      <Form.Input label='Password' type='password' />
      <Form.Checkbox inline label='J&#39;accepte les conditions d&#39;utilisation' />
      <Button secondary fluid>S'enregistrer</Button>
    </Form>
  </div>
)

export default MessageExampleAttached