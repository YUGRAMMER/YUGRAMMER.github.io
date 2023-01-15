import Expenses from "./components/Expenses/Expenses";
function App() {
  const expenses = [
    {
      id : 'el1',
      title : "Car Insurance",
      amount : 294.67,
      date : new Date(2021,2,28)
    },
    {
      id : 'el2',
      title : "Keyboard purchase",
      amount : 136.24,
      date : new Date(2021,2,15)
    },
    {
      id : 'el3',
      title : "Girlfriend Gift",
      amount : 302.12,
      date : new Date(2021,2,14)
    }
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
          <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
