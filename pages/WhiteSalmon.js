import Layout from '../components/Layout';
import Link from 'next/link';

const journalEntry = <div>
    <ul>
        <h3> White Salmon</h3>
            <h3> Description Beauftiful river that is surrounded by lavish forest and crystal blue water. This river can be run year around. There are great play boat features, waterfalls, and pool drops. This run can be enjoyed by raft, kayaking and canoes. If you want to have a stress free family trip commercial runs are permited on this run </h3>
            <h3>Class II- IV</h3> 
            <h3>Run Length 8 miles </h3> 
            <h3>Put In BZ Corner, Husem Falls</h3>  
            <h3>Take Out Husum Falls, Northwestern Park</h3>
            <h3>Location White Salmon, Washington</h3> 

    </ul>

</div>;

export default function clackamasUpper() {
    return (
        <Layout content={journalEntry} />

    );
}