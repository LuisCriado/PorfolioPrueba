import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import SharedButton from '../shared/SharedButton'
import InfoProject from './InfoProject'
import Video from './Video/Video'
import PokePreview from '../../assets/pokeAPi2.0.mp4'

export default function PokeApi () {
  const [t, i18n] = useTranslation('global')

  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
      p={['10px 30px', '10px 40px', '10px 50px', '10px 60px']}
    >
      {/* Video */}
      <Flex
        flex={['', '5']}
        p={['15px', '20px', '30px']}
        justifyContent={['center']}
      >
        <Video poster='../../assets/poke2.png' src={PokePreview}/>
      </Flex>
      {/* Info project */}
      <Flex
        flex={['', '3']}
        flexDirection={'column'}
        flexGrow={'2'}
        textAlign={{ base: 'center', md: 'start', lg: 'start' }}
        justifyContent="center"
      >
        <InfoProject
          title={t('projects.api-pokemon')}
          description={t('projects.about-api-pokemon')}
          urlProject="https://pokeapi20.vercel.app/"
          urlGit="https://github.com/LuisCriado/pokeAPi2.0"
        />
        <Box mt={'10px'}>
          <SharedButton child="Next" bgColor="black" />
          <SharedButton child="Tailwind" bgColor="celestito" />
          <SharedButton child="API" bgColor="yellow" />
          <SharedButton child="Javascript" bgColor="blue" />
          <SharedButton child="Three JS" bgColor="blue" />
        </Box>
      </Flex>
    </Flex>
  )
}
