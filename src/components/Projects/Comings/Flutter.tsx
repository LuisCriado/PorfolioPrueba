import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import SharedButton from '../../shared/SharedButton'
import InfoProject from './../InfoProject'
import Video from './../Video/Video'
import CelularPreview from '../../../assets/celu.mp4'

export default function Flutter () {
  const [t, i18n] = useTranslation('global')

  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
      p={['10px 10px', '10x 10x', '10x 10x']}
    >
      {/* Video */}
      <Flex
        flex={['', '4.5']}
        p={['0px', '0px', '0px']}
        justifyContent={['center']}
      >
        <Video poster='../../assets/CELULAR1.png' src={CelularPreview}/>
      </Flex>
      {/* Info project */}
      <Flex
      margin={'5px'}
      padding={'3px'}
        flex={['10', '32']}
        flexDirection={'column'}
        flexGrow={'2'}
        textAlign={{ base: 'center', md: 'start', lg: 'start' }}
        justifyContent="center"
      >
        <InfoProject
          title={t('projects.flutter-app')}
          description={t('projects.about-fluterr-app')}
          urlProject="#"
          urlGit="https://github.com/LuisCriado/"
        />
        <Box mt={'10px'}>
          <SharedButton child="Dart" bgColor="red" />
          <SharedButton child="Flutter" bgColor="celestito" />
          <SharedButton child="Material" bgColor="yellow" />
          <SharedButton child="Cuppertino" bgColor="violete" />
        </Box>
      </Flex>
    </Flex>
  )
}
