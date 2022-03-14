/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-extraneous-dependencies */
import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import AppTheme from 'containers/App/AppTheme'

type TAllTheProvidersProps = {
  children: React.ReactElement
}

const AllTheProviders = ({ children }: TAllTheProvidersProps) => {
  return <AppTheme>{children}</AppTheme>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): any =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
