import Layout from '../components/Layout';
import Link from 'next/link';

const journalEntry = <div>
    <div className="header"><h1>Molalla Three bears</h1></div>

    <div >
        <img className="Ethan" src="/Molalla.jpg" alt="my image" width="1500" height="300" />
    </div>
    <br />
    <div className="card">
        <ul>
        <h2> Description : Beautiful foresty canyon river that has continuos rapids that trickle into each other. The river can be scouted from the road and it is recommended. Depending on the flow the river can go from some must make moves class three to a big water class four.</h2>
       <h2> Class : III-IV, </h2>
           <h2>Run Length : 8.3 miles, </h2>
               <h2>Put In : Turner Bridge, </h2>
                   <h2>Take Out : Glen Avon Bridge, </h2>
                       <h2>Location : Molalla, Oredgon</h2>
                           
                           </ul>
        </div>
    <style jsx>{`
        
        .header {
            text-align: center;
            border: 20px;
            padding: 20px;
            margin: 20px;
            width: auto;
            height: auto;
            border: 10px solid white;
            box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
           
        }

     .Ethan {
        maxwidth: 100%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        height: auto;
        border:10px solid black;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        
    }
            h2 {
                
                width: auto;
                height: auto;
                padding: 50px;
                border: 1px solid white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                color::#556B2F;
            }
        

        
        
      `}</style>
</div>;

export default function clackamas() {
    return (
        <Layout content={journalEntry} />

    );
}