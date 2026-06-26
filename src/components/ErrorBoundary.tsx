import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Render error caught by ErrorBoundary:', error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div role="alert" style={{ padding: '2rem', color: '#ff4444', background: '#1a1a1a', borderRadius: '8px', margin: '1rem' }}>
          <h2 style={{ margin: '0 0 0.5rem' }}>Something went wrong</h2>
          <p style={{ margin: 0, fontFamily: 'monospace', fontSize: '0.875rem' }}>{this.state.error.message}</p>
        </div>
      );
    }
    return this.props.children;
  }
}
