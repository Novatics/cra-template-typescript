import i18n from 'common/i18n';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

const AppError: React.FC = props => {
  const { children } = props;
  const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps): React.ReactElement => {
    return (
      <div>
        <h1>{i18n.t('error.boundary.somethings-wrong')}</h1>
        <pre>{error.message}</pre>
        <button type="button" onClick={resetErrorBoundary}>
          Try again
        </button>
      </div>
    );
  };

  return <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>;
};

export default AppError;
