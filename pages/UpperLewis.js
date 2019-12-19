import Layout from '../components/Layout';
import Link from 'next/link';

const journalEntry = <div>
    <div className="header"><h1>Upper Clackaamas</h1></div>
    <div >
        <img className="Ethan" src="/Ethan.jpg" alt="my image" width="1500" height="300" />
    </div>
    <br />
    <div className="card">
    <ul>
        <h3>Lewis River</h3>
        <h3>Description: Class IV+ rapids with high waterfall drops. This is a river to cross off the list for advanced boaters</h3> 
        <h3> Class: IV-V+ </h3>
        <h3>RunLength: Falls </h3>
        <h3>PutIn: Above the Falls</h3>
        <h3>TakeOut: Below the falls </h3> 
        <h3>Location: Ariel, Washingington</h3>

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

export default function UpperLewis() {
    return (
        <Layout content={journalEntry} />

    );
}