import Layout from '../components/Layout';
import Link from 'next/link';

const journalEntry = <div>
    <ul>
        <h3>Name = "Jordan Creek"</h3>
            <p> Description = "Jordan creek is a beautifule narrow ruver that leads into the Wilson river, There are continuos class III rapids all the way down. If you enjoy narrow streams and technical moves this is the river for you to improve your creek boat skills. This is a river that has a couple of tricky spots always a great idea to scout out a rapid if you are not familular with the run. This is an area for active logging so alway be on guard for wood in the water."</p>
                <h3> Class = "III+", </h3>
                    <h3>RunLength = "6.5 miles"</h3>
                     <h3>PutIn = "Hann Bridge, which is about 5 miles up from put in. Stay on the road that follows the river right."</h3>
                    <h3>TakeOut = "Mile post 18, the bridge over Jordan creek. Where the Wilson river meets"</h3>  
                     <h3>Location = "Tillamook, Oregon"</h3>

    </ul>

</div>;

export default function JordanCreek() {
    return (
        <Layout content={journalEntry} />

    );
}