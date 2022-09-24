import { Routes, Route } from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.component.jsx"
import Shop from "./routes/shop/shop.component.jsx"
import Home from "./routes/home/home.route.component";
import Authentication from "./routes/authentication/authentication.component";

//* Routes allows Home to register this route level components that will in turn render a specific component when it matches a specific route that you assign.

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
