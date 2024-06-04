// import browser router dari react router
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {/**
     * bungkus/hubungkan aplikasi dengan browser router
     * agar url browser dapat dimanipulasi oleh react router
     */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
