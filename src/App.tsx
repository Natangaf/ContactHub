import { AuthProvider } from "./context/AuthProvider";
import { ContactProvider } from "./context/ContactProvider";
import { RoutesMain } from "./routes";
import GlobalStyle from "./styles/GlobalStyle";
import  ResetCSS  from "./styles/ResetCSS";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

export const App = () => {
  return (
    <>
      <ResetCSS/>
      <GlobalStyle />
      <AuthProvider>
        <ContactProvider>
          <RoutesMain />
        </ContactProvider>
      </AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default App;
