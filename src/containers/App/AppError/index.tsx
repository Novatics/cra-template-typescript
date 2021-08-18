import React from 'react';
import i18n from 'common/i18n/config';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

export interface AppErrorProps {
  children: JSX.Element;
}

const AppError: React.FC<AppErrorProps> = (props: AppErrorProps) => {
  function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
    return (
      <div>
        <h1>{i18n.t('error.boundary.somethings-wrong')}</h1>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
  }

  return <ErrorBoundary FallbackComponent={ErrorFallback}>{props.children}</ErrorBoundary>;
};

export default AppError;
