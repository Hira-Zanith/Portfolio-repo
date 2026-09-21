import keyboard from "../assets/projects/keyboard-store.png";
import ecommerce from "../assets/projects/ecommerce.png";
import taskmanager from "../assets/projects/taskmanager.png";
import javafx from "../assets/projects/javafx.png";

const projects = [
  {
    id: 1,
    title: "Keyboard Store",
    image: keyboard,
    description: "Laravel CRUD inventory management system.",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Ecommerce Frontend",
    image: ecommerce,
    description: "Responsive ecommerce website.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Task Manager",
    image: taskmanager,
    description: "ASP.NET task management application.",
    tech: ["ASP.NET", "SQL Server"],
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "JavaFX Login",
    image: javafx,
    description: "Desktop login application.",
    tech: ["Java", "JavaFX"],
    github: "#",
    demo: "#",
  },
];

export default projects;