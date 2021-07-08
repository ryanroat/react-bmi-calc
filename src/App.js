import './App.css';

import { Card, CardContent, Container, InputAdornment, TextField } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Container className="container" maxWidth="md">
        <header>
          <h1>Body Mass Index calculator</h1>
        </header>
        <main>
          <div className="inputs">
            <TextField className="height"
              type = "number"
              variant = "outlined"
              label = 'your height in inches'
              endAdornment = {<InputAdornment position="end">In</InputAdornment>} />
            <TextField className="weight"
              type = "number"
              variant = "outlined"
              label = 'your weight in pounds'
              endAdornment = {<InputAdornment position="end">Lbs</InputAdornment>} />
          </div>
          <div className="output">
            <Card>
              <CardContent>
                Your BMI is 
              </CardContent>
            </Card>
          </div>
        </main>


      </Container>
    </div>
  );
}

export default App;
