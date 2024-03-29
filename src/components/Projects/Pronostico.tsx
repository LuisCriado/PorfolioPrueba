import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import SharedButton from '../shared/SharedButton'
import InfoProject from './InfoProject'
import Video from './Video/Video'
import PronosticoPreview from '../../assets/pronostico.mp4'

export default function Pronostico () {
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
        <Video poster='../../assets/pronostico1.png' src={PronosticoPreview}/>
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
          title={t('projects.pronostrico-app')}
          description={t('projects.about-pronostrico-app')}
          urlProject="https://propornostico.netlify.app/"
          urlGit="https://github.com/LuisCriado/"
        />
        <Box mt={'10px'}>
          <SharedButton child="HTML" bgColor="red" />
          <SharedButton child="CSS" bgColor="turquoise" />
          <SharedButton child="Javascript" bgColor="yellow" />
          <SharedButton child="Gradient UI" bgColor="violete" />
        </Box>
      </Flex>
    </Flex>
  )
}
