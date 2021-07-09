import './App.css';
import { useState } from 'react';

import { Card, CardContent, Container, TextField } from '@material-ui/core'
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";


function App() {
  const [height, setHeight] = useState(70)
  const [weight, setWeight] = useState(170)

  return (
    <div className="App">
      <Container className="container" maxWidth="xs">
        <Header />
        <main>
          <div className="inputs">
            <TextField className="height"
              type = "number"
              variant = "outlined"
              label = 'your height in inches'
              value = {height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <TextField className="weight"
              type = "number"
              variant = "outlined"
              label = 'your weight in pounds'
              value = {weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="output">
            <Card>
              <CardContent>
                Your BMI is { (weight / (height**2) * 703).toFixed(2) }
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
