import AppHeader from '../AppHeader';

export interface AppLayoutProps {
  children: JSX.Element;
}

const AppLayout: React.FC<AppLayoutProps> = (props: AppLayoutProps) => {
  const { children } = props;
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
};

export default AppLayout;
