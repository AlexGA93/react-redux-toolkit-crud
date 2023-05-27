import React from 'react';
import { CardLogin } from '../../../components';
import './CreateTaskPage.css';

const CreateTaskPage = () => {
  return (
    <div className='card-container'>
      <CardLogin title={"Create Task"} subtitle={"Insert a New Task"} />
    </div>
  )
}

export default CreateTaskPage