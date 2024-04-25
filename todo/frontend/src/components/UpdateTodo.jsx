import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdateTodo = () => {
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedCategory, setUpdatedCategory] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await axios.get(`/todos/update/${id}`);
        const { title, category } = response.data;
        setUpdatedTitle(title);
        setUpdatedCategory(category);
      } catch (error) {
        console.error("Error fetching todo:", error);
      }
    };
    fetchTodo();
  }, [id]);

  const handleUpdateTodo = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/todos/${id}`, {
        title: updatedTitle,
        category: updatedCategory,
      });
      navigate("/");
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>Update Todo</h2>
      <form onSubmit={handleUpdateTodo}>
        <label>Title:</label>
        <input
          type="text"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
        />
        <label>Category:</label>
        <input
          type="text"
          value={updatedCategory}
          onChange={(e) => setUpdatedCategory(e.target.value)}
        />
        <button type="submit">Update</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default UpdateTodo;
