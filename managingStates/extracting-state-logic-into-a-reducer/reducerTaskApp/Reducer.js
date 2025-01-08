export default function taskReducer(task, action) {
  switch (action.type) {
    case "added": {
      return [
        ...task,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }

    case "changed": {
      return task.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else return t;
      });
    }

    case "deleted": {
      return task.filter((t) => t.id !== action.id);
    }

    default:
      break;
  }
}
