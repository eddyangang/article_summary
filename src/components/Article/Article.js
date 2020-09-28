import React, { useContext } from 'react'
import { Container, Divider, Grid, Image, Segment, Header } from 'semantic-ui-react'
import AppContext from '../../Context/AppContext';

export default function Article() {
    const { article } = useContext(AppContext)

    return (
    <Container>
            <Segment>
            <Header as="h4">
                    {article.title}
                </Header>
                <p>By {article.author}</p>
                <Image src={article.image} />
            </Segment>
            <Segment>
            <Grid columns={2} relaxed='very' fitted>
              <Grid.Column>
                <Header as='h2'  textAlign='center'>Original</Header>
                <p>{article.text}</p>
              </Grid.Column>
              <Grid.Column>
              <Header as='h2'  textAlign='center'>Summary</Header>
                <p> <span><strong>Keywords:</strong></span> {article.keywords.join(", ")}.</p>
                <p> {article.summary} </p>
              </Grid.Column>
            </Grid>
        
            <Divider vertical>And</Divider>
          </Segment>
    </Container>
    )
}
