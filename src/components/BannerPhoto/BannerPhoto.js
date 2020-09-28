import React from 'react'
import { Image} from 'semantic-ui-react'
import "./BannerPhoto.css"
export default function BannerPhoto() {
    return (
        <div className="black">
            <Image src='./assets/nlp.png' size={"massive"} centered className="flipped"/>
        </div>
    )
}
