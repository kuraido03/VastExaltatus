import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import images from '../../constants/images';

const CareerExploration = () => {
  return (
    <ScrollView className="bg-primary">
    <View className="flex flex-col md:flex-row rounded-xl p-8 md:p-0">
      <Image
        className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        source={images.three}
      />
      <View className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <Text className="text-lg font-medium">
          “Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Consectetur soluta numquam recusandae, maxime eaque porro saepe
         nulla doloribus atque velit consequuntur error, molestiae obcaecati
         illum accusamus, sunt nisi natus commodi? Porro obcaecati recusandae
         animi facere rerum, sit deleniti consequatur perferendis sequi
         esse! Aliquid quo eaque non tenetur praesentium reiciendis 
         incidunt? Porro blanditiis, officia repudiandae consequuntur 
         laboriosam hic ab recusandae unde soluta dolores quidem ad 
         aliquid. Fuga delectus quo voluptatem? Minima veritatis quos,
         itaque cumque quis autem? Esse vero atque corrupti fuga sint
         assumenda voluptates placeat delectus, praesentium odio illum 
         consequuntur similique alias ea sunt expedita accusamus saepe,
         totam laborum asperiores cupiditate mollitia, aut suscipit! Eos
         eaque repudiandae nemo esse atque eius consectetur hic et? Culpa 
         dolorem et earum tenetur iusto mollitia accusamus veritatis cum
         ipsam aliquam, placeat quas ea ex doloribus. Perferendis, hic fuga 
         expedita iusto fugiat a minus et adipisci deserunt veniam inventore
         ecessitatibus magni tenetur voluptas repellat dolor perspiciatis.
         Laboriosam ex consequuntur quod. Sint veritatis minus at veniam
         totam, illo voluptatum harum mollitia ad sequi. Sequi consequuntur
         alias possimus. Ratione sit aspernatur quasi, voluptatum nemo rerum 
         esse ullam aperiam quaerat sapiente voluptatem mollitia, illo ex?
         Obcaecati ad expedita quae atque deserunt esse commodi tempora
         sequi et sunt enim illum, autem id ex. Illo ipsam odio aspernatur
         numquam dolorum vitae laudantium similique, delectus, reprehenderit
         autem ratione debitis, placeat non. Officiis, nemo minima nostrum
         fugiat, mollitia ipsum amet molestiae facere eveniet, possimus 
         ratione repellendus suscipit sunt eum. Iusto voluptates ipsa dolor!
         Eos veniam tempore dolores culpa. Esse, quaerat reiciendis. 
         Molestias fugiat adipisci et unde porro optio accusamus commodi 
         atque hic, aliquid excepturi eos labore possimus aliquam itaque 
         velit distinctio impedit? Laudantium ipsa dolorum magnam molestiae,
         a iusto necessitatibus veniam quo repudiandae ducimus exercitationem
         consequatur aliquid dolore temporibus nam. Alias eaque animi ex 
         rem eius incidunt quod quisquam ipsum tempore est?”
        </Text>
        <View className="font-medium">
          <Text className="text-sky-500 dark:text-sky-400">Odyssy Fritz</Text>
          <Text className="text-slate-700 dark:text-slate-500">Staff Engineer</Text>
        </View>
      </View>
    </View>
    </ScrollView>
  )
}

export default CareerExploration