import { ErrorBoundary, FallbackProps } from 'react-error-boundary'

type TAppErrorProps = {
  children: React.ReactNode
}

const AppError = ({ children }: TAppErrorProps) => {
  const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps): React.ReactElement => {
    return (
      <div>
        <h1>Olá tudo bem</h1>
        <pre>{error.message}</pre>
        <button type="button" onClick={resetErrorBoundary}>
          Try again
        </button>
      </div>
    )
  }

  return <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
}

export default AppError
