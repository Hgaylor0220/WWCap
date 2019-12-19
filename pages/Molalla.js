import Layout from '../components/Layout';
import Link from 'next/link';

const journalEntry = <div>
    <ul>
   <h3>Name : Molalla Three bears</h3>
        <h3> Description : Beautiful foresty canyon river that has continuos rapids that trickle into each other. The river can be scouted from the road and it is recommended. Depending on the flow the river can go from some must make moves class three to a big water class four.</h3>
       <h3> Class : III-IV, </h3>
           <h3>Run Length : 8.3 miles, </h3>
               <h3>Put In : Turner Bridge, </h3>
                   <h3>Take Out : Glen Avon Bridge, </h3>
                       <h3>Location : Molalla, Oredgon</h3>
                           
                           </ul>
        
</div>;

export default function clackamas() {
    return (
        <Layout content={journalEntry} />

    );
}