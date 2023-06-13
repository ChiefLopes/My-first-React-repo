import { useState } from "react";
import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
// import "./index.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's appointment",
      day: "feb, 5th at 2:30pm",
      reminder: "true",
    },
    {
      id: 2,
      text: "Meeting At School",
      day: "feb, 6th at 1:30pm",
      reminder: "true",
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "feb, 6th at 1:30pm",
      reminder: "true",
    },
  ]);

  // Delete Task Function
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No task available"
      )}
    </div>
  );
}


// declaring props
Header.defaultProps = {
  title: "Task Tracker",
};


export default App;
