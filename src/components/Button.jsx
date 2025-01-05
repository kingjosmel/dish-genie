import {Link} from 'react-router-dom';

export default function Button(props) {
    return (
        <div className="flex items-center justify-center mt-11">
        <button className="bg-black text-white py-2 px-4 rounded-lg ">
            <Link to='/recipe'>{props.title}</Link>
        </button>
        </div>
    );

}