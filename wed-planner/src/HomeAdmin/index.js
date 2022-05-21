import Banner from '../Components/Banner.js'
import CardGroup from '../Components/Card_Group/index.js';


function HomeAdmin() {
    const username = "Monica"


    return(
        <div>
            <Banner username = {username}/>
            <CardGroup />
        </div>
    );
}

export default HomeAdmin