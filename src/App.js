import { Box, Heading } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import './App.css';


function App() {
  return (
    <div className="App">
      <Box p={10} bg={'black'}>
        <Heading size="4x1" color="white">SceneIt Redux</Heading>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
