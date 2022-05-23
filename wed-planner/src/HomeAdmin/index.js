import Banner from '../Components/Banner.js'
import CardGroup from '../Components/Card_Group/index.js';
import TasksGroup from '../Components/Tasks/index.js';


function HomeAdmin() {
    const username = "Monica"


    return(
        <div>
            <Banner username = {username}/>
            <CardGroup />
            <TasksGroup />
        </div>
    );
}

export default HomeAdmin