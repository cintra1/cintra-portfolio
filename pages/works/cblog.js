import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Cintra Comunicação's Blog">
    <Container>
      <Title>
        Cintra Comunicação&apos;s Blog <Badge>2022-</Badge>
      </Title>
      <P>
        A blog to find out about the company&apos;s services and the main news and
        information about digital marketing.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://cintracomunicacao.com.br/blog/">
          https://cintracomunicacao.com.br/blog/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Desktop/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PHP, Elementor </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/cblog-eyecatch.png" alt="Blog" />
      <WorkImage src="/images/works/cblog-scrow.png" alt="Blog" />
      <WorkImage src="/images/works/cblog-news.png" alt="Blog" />
    </Container>
  </Layout>
)

export default Work
