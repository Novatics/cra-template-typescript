import './styles.css';

const AppLoading: React.FC = () => {
  return (
    <div className="container">
      <div className="spinner">
        <div className="cube1" />
        <div className="cube2" />
      </div>
    </div>
  );
};

export default AppLoading;
