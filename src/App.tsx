import Calendar from "./Calendar";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        My Reactive Calendar
      </h1>
      <Calendar />
    </div>
  );
}

export default App;
