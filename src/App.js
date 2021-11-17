import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from "./Home";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#FFE400",
        main: "#FFE400",
        dark: "#ffd000",
        contrastText: "#fff",
      },
      secondary: {
        light: "#0064FF",
        main: "#0064FF",
        dark: "#0046af",
        contrastText: "#fff",
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
