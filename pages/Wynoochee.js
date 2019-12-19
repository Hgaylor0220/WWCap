import Layout from '../components/Layout';
import Link from 'next/link';

const journalEntry = 
        <div>
            
          <ul>
            <h1>WynoocheeRiver</h1>
                <p> Description: This river can range from a beautiful friendly class II to a dangerous class V. Class V sections include sieves and continous pushy rapids depending on the flows. </p>
                <h3> Class : II-V </h3>
                <h3> Run Length : 10.4 miles </h3>
                <h3> Put In : Wynoochee Reservoir , Wynoochee dam , Fish collection Dam , FR 220 Spur </h3>
                <h3> Take Out : Fish collection Dam, FR 220 Spur, Save Creek </h3>
                <h3> Location : Grisdale, Washington </h3>
            
        </ul>
</div>;

export default function Wynoochee() {
    return (
        <Layout content={journalEntry} />

    );
}