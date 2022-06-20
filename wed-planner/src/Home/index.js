import Banner from '../Components/Banner.js'
import CardGroup from '../Components/Card_Group/index.js';
import TasksGroup from '../Components/Tasks/index.js';


function Home({username}) {

    return(
        <div>
            <Banner username = {username}/>
            <CardGroup/>
            <div className='container mt-4'>
                <hr />
            </div>
            <TasksGroup username={username}/>
        </div>
    );
}

export default Home