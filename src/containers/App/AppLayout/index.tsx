import AppHeader from '../AppHeader';

const AppLayout: React.FC = props => {
  const { children } = props;
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
};

export default AppLayout;
