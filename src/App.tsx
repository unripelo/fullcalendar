import Calendar from "./Calendar";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        My Reactive Calendar
      </h1>
      <Calendar />
    </div>
  );
}

export default App;
