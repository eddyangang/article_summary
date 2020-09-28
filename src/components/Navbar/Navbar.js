import React from 'react'
import { Header, Segment } from 'semantic-ui-react'
import "./Navbar.css"
export default function Navbar() {
    return (
        <Segment className="removeMargin">
            <Header as='h1'  textAlign='center'>Summarize</Header>
        </Segment>
    )
}
