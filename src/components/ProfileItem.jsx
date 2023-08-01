import React from 'react'
import { Flex, Image, Text } from '@aws-amplify/ui-react';


function ProfileItem() {
  return (
      <Flex
        gap="10px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="relative"
        padding="10px 10px 10px 10px"
        backgroundColor="rgba(255,255,255,1)"
      >
        <Flex
          gap="16px"
          direction="row"
          width="592px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
        >
          <Image
            width="96px"
            height="96px"
            display="block"
            shrink="0"
            position="relative"
            borderRadius="160px"
            objectFit="cover"
            alt=""
          />
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="22px"
            textAlign="left"
            display="block"
            shrink="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            Username
          </Text>
        </Flex>
      </Flex>
      )
    }

export default ProfileItem