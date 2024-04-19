import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  fetchStudents } from "../app/students/studentSlice";
import Loader from "./Loading";

const Students = () => {
  const { loading, error, students } = useSelector((state) => state.student);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const addStudent = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <form onClick={addStudent}>
        <div className="form_input">
          <label htmlFor="name">Firstname:</label>
          <input type="text" id="name" placeholder="firstname" />
        </div>
        <div className="form_input">
          <label htmlFor="lastname">Lastname:</label>
          <input type="text" id="lastname" placeholder="lastname" />
        </div>
        <div className="form_input">
          <label htmlFor="group">Group:</label>
          <input type="text" id="group" placeholder="group"  />
        </div>
        <button type="submit" className="btn">
          Add Students
        </button>{" "}
      </form>

      <div className="table">
        {loading && <Loader />}
        {error && <h3>{error}</h3>}
        {students.length > 0 ? (
          students.map((user) => (
            <div className="line" key={user.id}>
              <p>{user.name}</p>
              <p>{user.lastname}</p>
              <p>{user.group}</p>
              <button className="btn_delete">Delete</button>
            </div>
          ))
        ) : (
          <div>No students found.</div>
        )}
      </div>
    </div>
  );
};

export default Students;
