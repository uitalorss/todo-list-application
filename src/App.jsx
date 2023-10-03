import { GlobalStyled } from "./styles/global";
import AuthProvider from "./Contexts/AuthProvider";
import { Routes } from "./Routes";

function App() {
  return (
    <AuthProvider>
      <Routes />
      <GlobalStyled />
    </AuthProvider>
  );
}

export default App;
