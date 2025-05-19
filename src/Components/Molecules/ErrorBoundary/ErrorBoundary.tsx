import { Component, PropsWithChildren, ReactNode } from "react";
import { saveErrorLog } from "../../../firebase/writeToDbFunctions";
type Props = {
  fallback: ReactNode;
  save?: boolean;
  setId?: string;
};

class ErrorBoundary extends Component<PropsWithChildren & Props> {
  state = { hasError: false };

  componentDidCatch(err: Error) {
    this.setState({ hasError: true });
    if (this.props.save) {
      saveErrorLog(err.message, this.props.setId);
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
