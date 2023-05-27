import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/tasks/taskSlice";
import { v4 as uuid } from 'uuid';
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import './TaskForm.css';
import {ToastContainerComponent} from '../ToastContainerComponent';

const TaskForm = () => {

  const [task, setTask] = useState({ title: "", desc: "" });
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask({
        ...task,
        [e.target.name]: e.target.value
    })
  };

  const assignId = () => uuid();

  const toastComp = (status) => {
    return (
      <ToastContainerComponent taskId={assignId} statusMssg={status} text={"Task created successfully!"} showTC={show}  />
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTask({
        ...task,
        id: assignId
    }));
    setShow(true);
    navigate('/');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="title"
          onChange={handleChange}
        />
        <textarea
          name="desc"
          placeholder="description"
          onChange={handleChange}
        ></textarea>
        <Button variant="success" type="submit">Create</Button>
      </form>
      {toastComp}
    </>
  );
};

export default TaskForm;
