import Layout from '../components/Layout';
import Link from 'next/link';

const journalEntry = <div>
    <ul>
        <h3>Name :Clackamas, upper"</h3>
        <h3> Description :Great class three plus rapids with pool drops that are spread out through the run making it possible  to put in and take out when ever. This run is great for kayakers, IK, rafting and paddle boards</h3>
        <h3> Class : III-IV, </h3>
        <h3>Run Length : miles, </h3>
        <h3>Put In : Powerhouse, Hole in the wall, Fish Creek, Toilet bowl, </h3>
        <h3>Take Out : Toilet Bowl, Moore Creek, Memoloose", </h3>
        <h3>Location : Estacada, Oredgon</h3>

    </ul>

</div>;

export default function clackamasUpper() {
    return (
        <Layout content={journalEntry} />

    );
}