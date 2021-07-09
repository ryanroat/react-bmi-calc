import './App.css';
import { useState } from 'react';

import { Button, Card, CardContent, Container, TextField } from '@material-ui/core'
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";


function App() {
  const [height, setHeight] = useState(70)
  const [weight, setWeight] = useState(170)
  const [targetBMI, setTargetBMI] = useState(20)
  const [calcToggled, setCalcToggled] = useState(false) // boolean to track which type of calculation to perform

  return (
    <div className="App">
      <Container className="container" maxWidth="xs">
        <Header />
        <main>
          <Button 
            variant="contained"
            color="default"
            onClick={() => {setCalcToggled(!calcToggled)}}
          >Toggle Calculation
          </Button>
          {calcToggled ? <h2>Calculate Target Weight</h2> : <h2>Calculate BMI</h2>}
          <section className="inputs">
            <TextField className="height"
              type = "number"
              variant = "outlined"
              label = 'your height in inches'
              value = {height}
              onChange={(e) => setHeight(e.target.value)}
            />
            {calcToggled ? (
              <TextField className="targetBMI"
              type = "number"
              variant = "outlined"
              label = 'your target BMI'
              value = {targetBMI}
              onChange={(e) => setTargetBMI(e.target.value)}
              />
            ) : (
              <TextField className="weight"
                type = "number"
                variant = "outlined"
                label = 'your weight in pounds'
                value = {weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            )}
          </section>
          <section className="output">
            <Card>
              {calcToggled ? (
                <CardContent>
                  Your target weight is { (targetBMI * height**2 / 703).toFixed(1) }
                </CardContent>
              ) : (
              <CardContent>
                Your BMI is { (weight / (height**2) * 703).toFixed(2) }
              </CardContent>
              )}
            </Card>
          </section>
        </main>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
