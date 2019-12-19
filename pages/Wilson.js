import Layout from '../components/Layout';
import Link from 'next/link';

const journalEntry = <div>
    <ul>
        <h3>Wilson River</h3>
        <p>Description : "This river is surrounded by forest, the rapids are described as pool drops with lots of river curves.</p>  
        <h3>Class : "II- IV"</h3>, 
        <h3>Run Length : "8 miles"</h3>
        <h3>Put In : "Jones Creek Campground mile post 23"</h3> ,
        <h3>Take Out : "Mile post 15, Mile post 18"</h3> , 
        <h3>Location : "Tillamook, Oregon",</h3>

    </ul>

</div>;

export default function Wilson() {
    return (
        <Layout content={journalEntry} />

    );
}