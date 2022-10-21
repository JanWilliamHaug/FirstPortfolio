import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbPortfolio from '../public/images/contents/youtube-how-to-build-portfolio.jpg'
import thumbHowToUseInkdrop from '../public/images/contents/youtube-how-to-use-inkdrop.jpg'
import thumbFishWorkflow from '../public/images/contents/youtube-fish-workflow.jpg'
import thumbMyDeskSetup from '../public/images/contents/BFF.jpg'
import thumb500PaidUsers from '../public/images/contents/blog-500-paid-users.jpg'
import thumbFinancialGoal from '../public/images/contents/blog-financial-goal.png'
import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg'
import thumb50xFaster from '../public/images/contents/codingGame2.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Future projects here
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="TARGEST"
            thumbnail={thumbPortfolio}
            href="https://www.youtube.com/watch?v=W-fFHeTX70Q"
          />
          <GridItem
            title="Random Anime Generator"
            thumbnail={thumbHowToUseInkdrop}
            href="https://www.youtube.com/watch?v=iUohO2MSot8"
          />
          <GridItem
            title="Anime Website"
            thumbnail={thumbFishWorkflow}
            href="https://www.youtube.com/watch?v=aC24p2GHdIg"
          />
          <GridItem
            title="BFF(Tinder copy)"
            thumbnail={thumbMyDeskSetup}
            href="https://www.youtube.com/watch?v=MYPVQccHhAQ"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="AI Companion App"
            thumbnail={thumb500PaidUsers}
            href="https://www.youtube.com/watch?v=5WvtAWoNc00"
          />
          <GridItem
            title="Chat App"
            thumbnail={thumbFinancialGoal}
            href="https://www.youtube.com/watch?v=sj72yGzBgoU"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="My first game"
            thumbnail={thumbHowToPriceYourself}
            href="https://www.youtube.com/watch?v=ofT4F0mxKtI"
          />
          <GridItem
            title="My second game"
            thumbnail={thumb50xFaster}
            href="https://www.youtube.com/watch?v=49pPH0668-M"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
