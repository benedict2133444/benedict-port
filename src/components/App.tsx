import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from 'pages/Homepage/Homepage';
import About from 'pages/About/About';
import Skills from 'pages/Skills/Skills';
import Portfolio from 'pages/Portfolio/Portfolio';
import Experience from 'pages/Experience/Experience';
import Contact from 'pages/Contact/Contact';

function App() {
  return (
    <div className="min-h-dvh bg-black"> {/* Changed bg-bg-primary to bg-black */}
      <div className="h-screen">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/benedict-port',
    element: <Homepage />
  },
  {
    path: 'about',
    element: <About />
  },
  {
    path: 'skills',
    element: <Skills />
  },
  {
    path: 'portfolios',
    element: <Portfolio />
  },
  {
    path: 'experience',
    element: <Experience />
  },
  {
    path: 'contact',
    element: <Contact />
  }
]);

export default App;