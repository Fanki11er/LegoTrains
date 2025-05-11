import { Component, PropsWithChildren, ReactNode } from "react";
import { saveErrorLog } from "../../../firebase/writeToDbFunctions";
type Props = {
  fallback: ReactNode;
  save?: boolean;
};

class ErrorBoundary extends Component<PropsWithChildren & Props> {
  state = { hasError: false };

  componentDidCatch(err: Error) {
    this.setState({ hasError: true });
    if (this.props.save) {
      saveErrorLog(err.message);
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
