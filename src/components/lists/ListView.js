import { FlatList } from 'native-base';
import ListItemView from '../listitems/ListItemView';

const ListView = (props) => {
  const { list, navigation, listType } = props;

  return (
    <FlatList
      data={list}
      renderItem={({ item }) => (
        <ListItemView
          id={item.id}
          image={item.poster_path}
          title={item.title || item.name}
          navigation={navigation}
          release_date={item.release_date}
          popularity={item.popularity}
          listType={listType}
        />
      )}
    />
  );
};
export default ListView;