import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { icons } from '../../constants';

interface SearchInputProps {
  value: string;
  handleChangeText: (e: string) => void;
  otherStyles?: string;
  placeholder?: string;
}

const SearchInput = ({ value, handleChangeText, placeholder, otherStyles } : SearchInputProps) => {

  
  return (

      <View className={`border-2 border-x-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary flex-row items-center space-x-4 ${otherStyles}`}>
        <TextInput
          className='flex-1 text-white mt-0.5 font-pregular text-base'
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"#7b7b8b"}
          onChangeText={handleChangeText}
        />
        <TouchableOpacity>
            <Image src={icons.search} className='w-5 h-5' resizeMode='contain' />
        </TouchableOpacity>
      </View>
  )
}

export default SearchInput