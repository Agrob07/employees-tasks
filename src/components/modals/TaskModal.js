import React from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import Modal from "./Modal";
import TaskForm from "../Tasks/TaskForm";
import { initialActions } from "../../util/data/actions";
import { api } from "../../api";
import { taskApi } from "../../util/config";
import { fetchAllTasks } from "../../redux/slice/tasksSlice";

const TaskModal = ({ actions, setActions, onEditTask }) => {
  const dispatch = useDispatch();
  const handleCreation = async (val) => {
    try {
      await api.createRequest(`${taskApi}`, val);
      dispatch(fetchAllTasks());
      toast.success(`Employee (ID: ) successfully created !`);
    } catch (error) {
      toast.error("Something went Wrong!");
    }
    setActions(initialActions);
  };
  const handleDelete = async () => {
    try {
      await api.deleteById(taskApi, onEditTask.id);
      dispatch(fetchAllTasks());
      toast.success(`Employee (ID: ) successfully created !`);
    } catch (error) {
      toast.error("Something went Wrong!");
    }

    setActions(initialActions);
  };

  const handleEdit = async (val) => {
    try {
      await api.updateById(taskApi, onEditTask.id, val);
      dispatch(fetchAllTasks());
      toast.success(`Employee (ID: ) successfully created !`);
    } catch (error) {
      toast.error("Something went Wrong!");
    }
    setActions(initialActions);
  };

  const handleConfirm = (val) => {
    switch (true) {
      case actions.create:
        return handleCreation(val);
      case actions.update:
        return handleEdit(val);
      case actions.delete:
        return handleDelete();
      default:
        return (() => console.log("Default case"))();
    }
  };

  const handleCancel = () => {
    setActions(initialActions);
  };
  return (
    <>
      {(actions.create || actions.update) && (
        <TaskForm
          onEditTask={onEditTask}
          isModalOpen={actions.create || actions.update}
          handleSubmit={handleConfirm}
          handleCancel={handleCancel}
        />
      )}

      <Modal
        isOpen={actions.delete}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      >
        <p>Are you Sure?</p>
      </Modal>
    </>
  );
};

export default TaskModal;
