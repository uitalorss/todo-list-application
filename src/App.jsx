import { GlobalStyled } from "./styles/global";
import AuthProvider from "./Contexts/AuthProvider";
import { Routes } from "./Routes";
import { TaskProvider } from "./Contexts/TaskProvider";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Routes />
        <GlobalStyled />
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
