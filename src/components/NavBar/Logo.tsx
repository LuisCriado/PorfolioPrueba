import { Box, Link } from '@chakra-ui/react'
import React from 'react'

export default function Logo () {
  return (
    <Box zIndex={'999'}>
      <Link
        href="#"
        _hover={{
          textDecoration: 'none'
        }}
        fontSize={['sm', 'md', 'lg', 'lg']}
        color={'primary'}
      >
        Luis Criado
      </Link>
    </Box>
  )
}
