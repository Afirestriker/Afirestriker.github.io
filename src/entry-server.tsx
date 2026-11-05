import { renderToString } from "react-dom/server";
import { App, routeMetadata, profile } from "./App";
export { routeMetadata, profile };
export function render(path: string) {
  return renderToString(<App path={path} />);
}
