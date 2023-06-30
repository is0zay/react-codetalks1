import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";	// This BrowserRouter component provides routing functionality to the app, NAVIGATION
																	// Allows client side routing without refreshing 
																	// Allows us to use browser history
																	// Routes stores all the routes
																	// Route defines individualroutes
import Layout from "./pages/Layout";		// Importing Layout component
import Home from "./pages/Home";		// Importing Home page component
import Blogs from "./pages/Blogs";		// Importing Blogs Component
import Contact from "./pages/Contact";	// Importing Contact Component
import NoPage from "./pages/NoPage";	// Importing NoPage Component

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>	{/* renders Layout */}
          <Route index element={<Home />} />	{/* renders Home, uses "index" keyword to set default url path to / */}
          <Route path="blogs" element={<Blogs />} /> {/* renders Blogs component, set the url path to /blogs */}
          <Route path="contact" element={<Contact />} /> {/* renders Contact component, set the url path to /contact */}
          <Route path="*" element={<NoPage />} /> {/* catches all the undefined url paths and renders NoPage Component */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);