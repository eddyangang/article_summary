import React from 'react'
import { Header, Accordion, Container } from 'semantic-ui-react'
import "./Description.css"

const panels = [{
    key: "how-to-use",
    title: "How to use?",
    content: "Just simply enter the URL of a news article and submit!"
},
{
    key: "how-it-works",
    title: "How does it work?",
    content: "By entering a URL to a valid article. We scrpe the webpage of all of its text. Then, using Natural language processing, we can extract key words from the original article to produce a concise summary of the article. It is not perfect, but it exciting to try."
}]

export default function Description() {
    return (
        <Container>
            <Header as="h3" textAlign="center">
                Summarize News Articles using Machine Learning
            </Header>
            <Accordion defaultActiveIndex={-1} panels={panels}/>
        </Container>
    )
}
