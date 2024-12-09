```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes, using exact for more control*/}
        <Route path="/about/*" element={<AboutDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  const location = useLocation();
  console.log(location);
  return <div>About {location.pathname}</div>;
}

function AboutDetails() {
  return <div>About Details</div>;
}
export default App;
```