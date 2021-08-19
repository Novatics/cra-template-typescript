import { render, RenderOptions } from '@testing-library/react';
import i18n from 'common/i18n/index';
import AppTheme from 'containers/App/AppTheme';
import React, { FunctionComponent, JSXElementConstructor, ReactElement } from 'react';
import { I18nextProvider } from 'react-i18next';

type AllTheProvidersProps = {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
};

const AllTheProviders: FunctionComponent<any> = ({ children }: AllTheProvidersProps) => {
  return (
    <I18nextProvider i18n={i18n}>
      <AppTheme>{children}</AppTheme>
    </I18nextProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
