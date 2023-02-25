import Header from './components/Header'
import React from 'react'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'

const App = () => {

  const[showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([

    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'January 26th at 4:30 PM',
        reminder: true,
    },
    {
        id: 2,
        text: 'Finish Full Stack Project',
        day: 'May 14th at 11:59 PM',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'June 10th at 2:00 PM',
        reminder: false,
    },
])

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

// Add Task

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

  return (
    <div className="container">
      <Header onAdd = {() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks 
      tasks={tasks} 
      onDelete={deleteTask} 
      onToggle={toggleReminder}/> : ('No Tasks'
      )}
    </div>
  )
}

// class implementation
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a Class</h1>
//   }
// }

export default App