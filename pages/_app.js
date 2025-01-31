import "../styles/globals.css";
import { Provider } from "../components/ui/provider.jsx";

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}
