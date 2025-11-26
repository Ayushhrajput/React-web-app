import { useParams } from 'react-router-dom';

function Stuff(props) {
    const {id} = useParams()
    return (
        <div className='p-4'>
            {id}
        </div>
    );
}

export default Stuff;