import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // Log to console; can be replaced with a monitoring service
        // eslint-disable-next-line no-console
        console.error('UI error caught:', error, info);
    }

    render() {
        if (this.state.hasError) {
            // Minimal fallback to avoid blank screen; no persistent visual change
            return null;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;


