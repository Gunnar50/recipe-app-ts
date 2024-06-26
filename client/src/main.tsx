import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { persistor, store } from "@redux/store";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<MantineProvider defaultColorScheme="light">
					<App />
				</MantineProvider>
			</PersistGate>
		</Provider>
	</BrowserRouter>
);
