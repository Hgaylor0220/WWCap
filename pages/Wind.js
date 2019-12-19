import Layout from '../components/Layout';
import Link from 'next/link';

const journalEntry = <div>
    <ul>
        <h3>Wind</h3>
            <p> Description If you are a advanced boater looking for some continuous technical rapids with some manditory must make moves,surround by lavish green foresty, the Upper Wind is for you. Not recommended for a class III boater. The Wind can be ran anywhere from 300-2500 cfs</p> 
            <h3>Class IV-V,</h3 >
            <h3>RunLength 6 miles, </h3>
            <h3>PutIn Stabler, trout Creek, </h3>
            <h3>TakeOut From the Wind River high way turn left on to High bridge road and make your first right onto Old Detour Road. Follow the dirt road down to the river., </h3><h3>Location Carson, Washington</h3>

    </ul>

</div>;

export default function Wind() {
    return (
        <Layout content={journalEntry} />

    );
}