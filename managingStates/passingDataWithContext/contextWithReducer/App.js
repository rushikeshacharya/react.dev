import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";
import { TaskProvider } from "./TaskContext.js";

export default function TaskApp() {
  return (
    <TaskProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TaskProvider>
  );
}
