import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import HomePage from "./components/HomePage";
import RandomPage from "./components/RandomPage";
import { TEST_FOODS } from "./TEST_FOODS";
import FoodPage from "./components/FoodPage";
import { Navbar, Container, Nav } from 'react-bootstrap';


function App() {
  const [foodsList, setFoodsList] = useState(TEST_FOODS);

  return (
    <div>
      <Navbar bg="dark" variant="dark"> {/* Use 'variant' instead of 'data-bs-theme' */}
        <Container>
          <Navbar.Brand as={Link} to="/">My Foods</Navbar.Brand> {/* Use 'Navbar.Brand' */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/random">Random</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<HomePage foodsList={foodsList} />} />
          <Route path="/random" element={<RandomPage foodsList={foodsList} />} />
          <Route path="/foods/:foodId" element={<FoodPage foodsList={foodsList} />} />
        </Routes>
      </Container>

    </div>
  );
}

export default App;





