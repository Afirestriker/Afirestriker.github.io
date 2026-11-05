import { createRoot, hydrateRoot } from "react-dom/client";
import { App } from "./App";
import "./styles.css";
const root = document.getElementById("root")!;
const path = root.dataset.route || window.location.pathname;
if (root.hasChildNodes()) hydrateRoot(root, <App path={path} />);
else createRoot(root).render(<App path={path} />);
