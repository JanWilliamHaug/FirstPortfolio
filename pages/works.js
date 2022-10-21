import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

import Paragraph from '../components/paragraph'

const Works = () => (
  <Layout title="Recent projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="Future project" title="Future project" thumbnail={thumbInkdrop}>
            info about my future project here
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="Future project 2"
            title="Future project 2"
            thumbnail={thumbWalknote}
          >
            My future app name
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="Future project 3"
            title="Future project 3"
            thumbnail={thumbFourPainters}
          >
            A video generated with .....
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="Future project 4" thumbnail={thumbMenkiki} title="Future project 4">
            An app that does.....
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <br></br>
      <Section delay={0.3}>
      <Heading as="h3" fontSize={20} mb={4}>
        I want to give special thanks to <br></br> Takuya Matsuyama
      </Heading>
      <Paragraph>
        This website is built based on <a href='https://www.craftz.dog/' 
        target='_blank'>Takuya Matsuyama's website</a>.
      </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Future Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="Future collaboration 1" thumbnail={thumbMargelo} title="Future collaboration 1">
            A website of my future project 
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="Future collaboration 2"
            thumbnail={thumbModeTokyo}
            title="Future collaboration 2"
          >
            info here
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="Future collaboration 3" thumbnail={thumbStyly} title="Future collaboration 3">
            future info here
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="1" thumbnail={thumbPichu2} title="1">
            My app
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="2"
            thumbnail={thumbFreeDBTagger}
            title="2"
          >
           Info
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="3" thumbnail={thumbAmembo} title="3">
            info...
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
