import React from 'react'
import { Button, Form, Message } from 'semantic-ui-react'



const MessageExampleAttached2 = () => (
  <div>
    <Message
      attached
      header='Bienvenue Chez SOS APERO49!'
      content='Connectez-vous Par ici!'
    />
    <Form className='attached fluid segment'>
    <Form.Input label='Username' placeholder='Username' type='text' />
      <Form.Input label='Password' type='password' />
      <Form.Checkbox inline label='Se rappeler de moi' />
      <Button secondary fluid>S'enregistrer</Button>
      </Form>
  </div>
)

export default MessageExampleAttached2