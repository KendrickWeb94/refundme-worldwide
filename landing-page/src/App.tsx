import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { HomeView } from "./routes/HomeView";
import { Start_your_claim } from "./routes/Start-your-claim";
import { Notfound } from "./routes/404";
import GetStarted from "./routes/getStarted";
import Login from "./routes/Login";

const App = () => {
  return (
    <main className="w-full min-h-screen relative">
      <Toaster position="top-right" reverseOrder={false} />
      <Router>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/Start-your-claim" element={<Start_your_claim />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/welcome-back" element={<Login />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
