//@ts-nocheck
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, RefreshControl, Text, View } from "react-native";
// import { useLocalSearchParams } from "expo-router";
import { images } from "../../constants";
import { EmptyState, SearchInput, Trending, VideoCard } from "../../components";

const data = [
  {
    id: 1,
    title: "blablabal",
    thumbnail: "hkk dakkjk",
    video: "kalkhhsks ssjjjs",
    creator: {id: 1, username: "hsjkakjks sjksks", email: "shksk@gmail.com", avartar: "sjskj skjks"}
  },
  {
    id: 3,
    title: "blablabal",
    thumbnail: "hkk dakkjk",
    video: "kalkhhsks ssjjjs",
    creator: {id: 1, username: "hsjkakjks sjksks", email: "shksk@gmail.com", avartar: "sjskj skjks"}
  },
  {
    id: 2,
    title: "blablabal",
    thumbnail: "hkk dakkjk",
    video: "kalkhhsks ssjjjs",
    creator: {id: 1, username: "hsjkakjks sjksks", email: "shksk@gmail.com", avartar: "sjskj skjks"}
  },
]
const Home = () => {
  // const [isSubmitting, setSubmitting] = useState(false);

  const [posts, setPosts] = useState(data)
  // const [latestPosts, setLatestPosts] = useState(data)
  // const { data: posts, refetch } = useAppwrite(getAllPosts);
  // const { data: latestPosts } = useAppwrite(getLatestPosts);


  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // await refetch();
    setInterval(()=>{
      setRefreshing(false);
    }, 5000)
    
  };

  // one flatlist
  // with list header
  // and horizontal flatlist

  //  we cannot do that with just scrollview as there's both horizontal and vertical scroll (two flat lists, within trending)

  return (
    <SafeAreaView className="bg-black">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
          // <VideoCard
          //   title={item.title}
          //   thumbnail={item.thumbnail}
          //   video={item.video}
          //   creator={item.creator.username}
          //   avatar={item.creator.avatar}
          // />
        )}
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-medium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-semibold text-white">
                  Cleaney
                </Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>

            <SearchInput />

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-lg font-regular text-gray-100 mb-3">
                Latest Videos
              </Text>

              {/* <Trending posts={latestPosts ?? []} /> */}
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos created yet"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
