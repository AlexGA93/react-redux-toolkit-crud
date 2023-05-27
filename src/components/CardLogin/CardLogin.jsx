import React from 'react';
import Card from 'react-bootstrap/Card';
import TaskForm from '../TaskForm/TaskForm';

const CardLogin = ({title, subtitle, body}) => {



  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
          <TaskForm />
        </Card.Body>
      </Card>
    </>
  )
}

export default CardLogin