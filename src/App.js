// import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";

function App() {
  const onDelete = () => {
    console.log("I am on delete");
  };

  let todos = [
    {
      srno: 1,
      title: "Go to the gym",
      desc: "Leg day",
    },
    {
      srno: 2,
      title: "drink water",
      desc: "complete daily water intake of 3 ltr",
    },
    {
      srno: 3,
      title: "Meditation",
      desc: "complete your daily meditation session",
    },
  ];
  return (
    <>
      <Header title="MyTodosList" searchBar={true} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
