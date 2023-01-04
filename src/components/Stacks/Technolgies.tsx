import { Flex } from '@chakra-ui/react'
import React, { useRef } from 'react'
import Title from '../shared/Title'
import StackItem from './StackItem'
import { motion, useInView } from 'framer-motion'

export default function Technolgies () {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: '100px'
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        duration: 2
      }
    }
  }

  return (
    <Flex
      as={motion.div}
      variants={containerVariants}
      initial={'hidden'}
      whileInView={'visible'}
      flexDirection={'column'}
      flex={['', '', '', '1']}
      gap={['3']}
      overflow={'hidden'}
    >
      <Title child="Stacks" />
      <Flex
        flexDirection={'column'}
        alignItems={'flex-start'}
        gap={['3']}
        ml={['10px', '20px', '30px']}
      >
        <StackItem bgColor="red" child="Next.js" />
        <Flex>
          <StackItem bgColor="turquoise" child="React.js" />
          <StackItem bgColor="lila" child="React Native" />
        </Flex>
        <Flex>
          <StackItem bgColor="pink" child="Typescrypt" />
          <StackItem bgColor="green" child="Python" />
        </Flex>
        <Flex>
          <StackItem bgColor="blue" child="Material-ui" />
          <StackItem bgColor="red" child="Boostrap" />
        </Flex>
        <Flex>
          <StackItem bgColor="turquoise" child="HTML" />
          <StackItem bgColor="lila" child="Css3" />
          <StackItem bgColor="pink" child="Javascript" />
        </Flex>
        <StackItem bgColor="green" child="G-nexus" />
      </Flex>
    </Flex>
  )
}
