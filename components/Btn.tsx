//@ts-nocheck
import { View, Text, Pressable } from 'react-native'
import React from 'react'

interface ButtonProps {
    title: string;
    onPress: () => void;
    type?: 'primary' | 'secondary';
}

const Btn = ({ title, onPress, type }: ButtonProps) => {
    return (
        <Pressable
            onPress={onPress}
            style={{
                backgroundColor: type === 'primary' ? 'purple' : '#FFFFFFA6',
                margin: 10,
                height: 60,
                width: "full",
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
            }}
        >
            <Text style={{ color: type === 'primary' ? '#FFFFFF' : '#171A20', fontSize: 24, fontWeight: '500' }}>{title}</Text>
        </Pressable>
    )
}
export default Btn
