import UnderBuilding from '../components/Not Found/UnderBuilding';
import NotFound from '../components/Not Found/NotFound';
import useIsPageOnBuilding from '../components/hooks/useIsPageOnBuilding';

export default function NotFoundError() {
    const isCurrentBuilding = useIsPageOnBuilding([
        'baños',
        'jabones',
        'login',
  

    ]);

    return isCurrentBuilding ? <UnderBuilding /> : <NotFound />;
}