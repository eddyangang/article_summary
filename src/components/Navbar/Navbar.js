import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import "./Navbar.css"
export default function Navbar() {
    return (
        <Segment className="removeMargin">
            <Image src='./assets/logo.PNG' size={"large"} centered/>
        </Segment>
    )
}
