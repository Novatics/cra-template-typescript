import AppHeader from '../AppHeader'

type TAppLayoutProps = {
  children: React.ReactNode
}

const AppLayout = ({ children }: TAppLayoutProps) => {
  return (
    <>
      <AppHeader />
      {children}
    </>
  )
}

export default AppLayout
