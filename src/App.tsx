import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ReserveSlotPopup from "./components/ReserveSlotPopup";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>

      {/* Reserve slot floating popup (global) */}
      <ReserveSlotPopup />
    </div>
  );
}

export default App;
