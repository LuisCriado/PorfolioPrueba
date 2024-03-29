import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import SharedButton from '../shared/SharedButton'
import InfoProject from './InfoProject'
import Video from './Video/Video'
import MNPreview from '../../assets/mninsumos.mp4'

export default function MnInsumos () {
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
        <Video poster='../../assets/mninsumos.png' src={MNPreview}/>
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
          title={t('projects.landing-agency')}
          description={t('projects.about-agency')}
          urlProject="https://www.mninsumos.com.ar/"
          urlGit="https://www.mninsumos.com.ar/admin"
        />
        <Box mt={'10px'}>
          <SharedButton child="HTML" bgColor="pink" />
          <SharedButton child="CSS" bgColor="green" />
          <SharedButton child="Javascript" bgColor="yellow" />
          <SharedButton child="WordPress" bgColor="blue" />
        </Box>
      </Flex>
    </Flex>
  )
}
