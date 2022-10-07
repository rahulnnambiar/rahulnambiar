import { ScrollView, VStack, Center, Heading, Image, Text } from 'native-base';
import { useEffect, useState } from 'react';
import { IMAGE_URL } from '../../config/api_config';
import { getMovieDetail } from '../../services/api';


const DetailedScreen = ({route}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    isloadDetails(route.params.id);
  }, []);

  const isloadDetails = (type) => {
    getMovieDetail(type,route.params.listType)
    .then(
      (result) => {
        setMovieDetail(result);
      },
      (error) => {
        alert('Error');
      }
    )
    .catch(err=>{
      console.log(err);
    })
  };
  return (
    <>
      <ScrollView>
            <Center marginTop={4}>
                {
                  isLoading ? 'Loading...' :
                       movieDetail ?
                          <VStack space={6} alignItems="center" m={8}>
                                <Heading mb={1}>{movieDetail.original_title ? movieDetail.original_title : movieDetail.original_name}</Heading>
                                <Image source={{ uri: `${IMAGE_URL}/${movieDetail.poster_path}` }} alt="Movie poster not found" size={"2xl"} />

                                <Text style={{ textAlign:'center'}}>{movieDetail.overview} </Text>
                                <Text mt={10} style={{ alignSelf: 'flex-start', color: 'darkgrey' }}>Popularity: {movieDetail.popularity} | Release Date: {movieDetail.release_date}</Text>
                          </VStack>
                          :
                          <Text>Cannot Find any Movie Record</Text>

                }
            </Center>
        </ScrollView>
    </>
  );
};

export default DetailedScreen;
