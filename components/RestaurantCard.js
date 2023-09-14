import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from "react-native-heroicons/solid"
import { LocationMarkerIcon } from "react-native-heroicons/outline"
import { urlFor } from '../sanity'

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    shortDescription,
    dishes,
    long,
    lat,
}) => {
    return (
        <TouchableOpacity className="bg-white mr-3 shadow">
            <Image
                source={{
                    uri: urlFor(imgUrl).width(200).url(),
                }}
                className="h-36 w-64 rounded-sm"
            />

            <View className="px-3 pb-4">
                <Text className="font-bold text-lg pt-2">{title}</Text>
            </View>

            <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />

                <Text className="text-xs text-gray-500">
                    <Text className="text-green-500">{rating}</Text>  {genre}
                </Text>

            </View>

            {/* Location marker */}
            <View className="flex-row items-center space-x-1">
                {/* <LocationMarkerIcon color="gray" opacity={0.4} size={22} /> */}
                <Text className="text-xs text-gray-500"> Nearby {address} </Text>

            </View>

        </TouchableOpacity>
    )
}

export default RestaurantCard