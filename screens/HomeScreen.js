import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import { UserIcon, ChevronDownIcon, AdjustmentsIcon, SearchIcon } from 'react-native-heroicons/outline'
import Catagories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity'

const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories, setfeaturedCategories] = useState([])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    useEffect(() => {
        sanityClient.fetch(
            `
            *[_type == "featured"]{
                ...,
                restaurants[]->{
                  ...,
                  dishes[]->,
      
                }
            }
            `
        ).then((data) => { setfeaturedCategories(data) })
    }, [])
    // console.log(featuredCategories)

    return (
        <SafeAreaView className='bg-white pt-5'>
            <View className='flex-row pb-3 items-center mx-4 space-x-2 px-4'>
                <Image
                    source={{ uri: 'https://links.papareact.com/wru' }}
                    className='h-5 w-5 bg-gray-300 p-4 rounded-full'
                />
                <View className="flex-1">
                    <Text className='font-bold text-gray-300 text-xs'>Deliver Now!</Text>
                    <Text className='font-bold text-xl'>
                        Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>
                <UserIcon size={35} color="#00CCBB" />
            </View>

            <View className='flex-row items-center space-x-2 pb-2 mx-4'>
                <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
                    {/* <SearchIcon /> */}
                    <TextInput placeholder="Restuarants and cuisines" keyboardType='default' />
                </View>
                {/* <AdjustmentsIcon /> */}
            </View>
            {/* scrollable container */}
            <ScrollView className='bg-gray-100'>
                {/* Catagories */}
                {/* Featured rows */}
                <Catagories />
                {/* Featured Rows */}

                {featuredCategories?.map(category => (
                    <FeaturedRow
                        key={category._id}
                        id={category._id}
                        title={category.name}
                        description={category.short_description}
                    />
                ))}

            </ScrollView>

        </SafeAreaView>
    );
};

export default HomeScreen;