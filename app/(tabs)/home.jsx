import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import images from '../../constants/images';

const Home = () => {
  return (
    <ScrollView className="bg-primary">
    <View className="flex flex-col md:flex-row rounded-xl p-8 md:p-0">
      <Image
        className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        source={images.one}
      />
      <View className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <Text className="text-lg font-medium">
          “Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Accusantium ratione earum dolores dicta! Qui, cum eaque dolor in vero quidem,
            eius numquam inventore veniam porro aut minus, fugit illum. Molestiae.”
        </Text>
        <View className="font-medium">
          <Text className="text-sky-500 dark:text-sky-400">Sarah Stryg</Text>
          <Text className="text-slate-700 dark:text-slate-500">Staff Engineer</Text>
        </View>
      </View>
    </View>
    <View className="flex flex-col md:flex-row rounded-xl p-8 md:p-0">
      <Image
        className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        source={images.two}
      />
      <View className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <Text className="text-lg font-medium">
          “Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Eaque nesciunt obcaecati provident dolores perferendis consequatur vel.
            Quas quibusdam eveniet sunt?”
        </Text>
        <View className="font-medium">
          <Text className="text-sky-500 dark:text-sky-400">Eralith Myier</Text>
          <Text className="text-slate-700 dark:text-slate-500">Web Developer</Text>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

export default Home;
