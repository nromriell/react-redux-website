import React from 'react'
import '../../Theme.css'
import ProfilePic from '../../Images/profilepic.png'

const HomePage:React.FC = () => {
    return <div className="HomePage">
            <div className="Empty"/>
            <div className="DetailInfo">
                <div className="ProfilePic" style={{backgroundImage:"url("+ProfilePic+")"}}/>
                <h1>Nathan Romriell</h1>
                <h2>Software Engineer</h2>
                <h3>Portland, OR</h3>
                <div className="SocialIcons">
                    <a href="https://www.linkedin.com/in/nathan-romriell-64173470/"><i className="fab fa-linkedin"/></a>
                    <a href="https://github.com/nromriell"><i className="fab fa-github-square"/></a>
                    <a href="https://twitter.com/NRomriell"><i className="fab fa-twitter-square"/></a>
                    <a href="mailto:nateromriell@gmail.com"><i className="fas fa-envelope-square"/></a>
                </div>
            </div>
        </div>
};

/*
<p>Lorem ipsum dolor sit amet, usu persius aliquando elaboraret cu. Duo justo postea eruditi te, eam in purto verear. Eu prompta scriptorem instructior duo, forensibus assueverit scribentur ius ad. Meis nusquam fastidii qui cu, cu labitur corrumpit honestatis has. No choro epicurei contentiones vim, quo et fugit atomorum assueverit. Movet docendi pri ne.
            Est eu quot labore, ne nam nibh platonem. Et iuvaret senserit vix. Discere intellegebat ut eum, vim ea expetendis sententiae. Id eius congue noster sea, ei meis graece laboramus vix.
            Pri no consetetur intellegam adversarium, ne putent nostro pri. Autem volutpat ex vis, vis minimum explicari te. An sed aeterno aperiam, solet repudiare mea ne. Cum laudem tempor fabulas at, ferri molestiae contentiones ad vim. Mei iracundia democritum ut.
            Tale volutpat nec no, his id semper blandit. Pro ex feugiat recteque, in cum fabellas invidunt. Ei appetere repudiandae mea, id est tacimates honestatis. Aliquip sensibus molestiae eos at. No eos exerci tamquam. Sint atqui sadipscing per no, has te epicuri petentium dissentias.
            Omnium accusam no nec. Sed posse summo utroque cu. Vis ne natum voluptatum, mel esse audire ex. Eligendi fabellas patrioque ea nam.</p>
 */

export default HomePage;