import {Box,Button, Heading, HStack, Image, Text, VStack} from 'native-base';
import { IMAGE_URL } from '../../config/api_config';

const ListItemView = (props) => {
  const { id, image, title, navigation, release_date, popularity, listType } =
    props;
  return (
    <Box borderRadius="md">
      <HStack padding="2">
        <Box>
            <Image
              alt={title}
              source={{ uri: IMAGE_URL + image }}
              height={'120'}
              width={'110'}
            />
        </Box>
        <VStack pl={5}>
          <Heading size="xs" width={200}>
            {title}
          </Heading>
          <Text py={1}>Popularity: {popularity}</Text>
          <Text pb={1}>Release Date: {release_date}</Text>
          <Button
            variant="solid"
            width="100%"
            onPress={() =>
              navigation.navigate('Detail', {
                id,
                title,
                listType,
              })
            }
          >
            More Details
          </Button>
        </VStack>
      </HStack>
    </Box>
  );
};

export default ListItemView;
