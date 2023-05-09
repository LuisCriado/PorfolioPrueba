import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import SharedButton from '../shared/SharedButton'
import InfoProject from './InfoProject'
import Video from './Video/Video'
import PortfolioPreview from '../../assets/porfolio.mp4'

export default function Portfolio () {
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
        <Video poster='../../assets/Portfolio-preview.png' src={PortfolioPreview}/>
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
          title={t('projects.portfolio')}
          description={t('projects.about-portfolio')}
          urlProject="#"
          urlGit="https://github.com/LuisCriado/"
        />
        <Box mt={'10px'}>
          <SharedButton child="React Js" bgColor="red" />
          <SharedButton child="Chakra ui" bgColor="celestito" />
          <SharedButton child="Responive Desing" bgColor="yellow" />
          <SharedButton child="EMOTION" bgColor="green" />
        </Box>
      </Flex>
    </Flex>
  )
}
