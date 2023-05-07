import EmptyList from '../components/EmptyList';
import List from '../components/List';

const ListScreen = () => {
  const todos = [];
  return todos.length ? <List /> : <EmptyList />;
};
export default ListScreen;
