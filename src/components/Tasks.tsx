
const tasks=[
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
    { id: 3, title: "Task 3", completed: false }
  ];
const Tasks = () => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="p-4 m-5 bg-gray-100 rounded shadow border-3 border-amber-300">
          <h2>{task.title}</h2>
          <p>Status: {task.completed ? "Completed" : "Pending"}</p>
        </div>
      ))}
    </div>
  )
}

export default Tasks