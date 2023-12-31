
import Weather from "./Weather";
import "./App.css";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Amsterdam" />

        <footer>
          This project is created by{" "}
          <a href="https://sophiehaasnoot.netlify.app"
          target="_blank"
          rel="noreferrer">
            Sophie Haasnoot
            </a>{" "}and is{" "}
          <a href="https://github.com/misshaasnoot/my-weather-app"
          target="_blank"
          rel="noreferrer">open sourced</a>
        </footer>
      </div>
    </div>
  );
}
