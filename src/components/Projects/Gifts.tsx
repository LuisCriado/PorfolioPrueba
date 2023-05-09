import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import SharedButton from '../shared/SharedButton'
import InfoProject from './InfoProject'
import Video from './Video/Video'
import GiftsPreview from '../../assets/gifs-app.mp4'

export default function Gifts () {
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
        <Video poster='../../assets/gifs.png' src={GiftsPreview}/>
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
          title={t('projects.gift-app')}
          description={t('projects.about-gift-app')}
          urlProject="https://lookgifs.netlify.app/"
          urlGit="https://github.com/LuisCriado/"
        />
        <Box mt={'10px'}>
          <SharedButton child="React JS" bgColor="turquoise" />
          <SharedButton child="CSS" bgColor="celestito" />
          <SharedButton child="Javascript" bgColor="yellow" />
          <SharedButton child="Boostrap" bgColor="blue" />
        </Box>
      </Flex>
    </Flex>
  )
}
