import MatchDetails from '../components/MatchDetails';

const MatchDetailsScreen = ({ route }) => {
  const { partida } = route.params;
  return <MatchDetails partida={partida} />;
};

export default MatchDetailsScreen; 