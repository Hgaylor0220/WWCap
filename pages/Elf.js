import Layout from '../components/Layout';
import Link from 'next/link';

const journalEntry = <div>
    <div className="header"><h1>EFL</h1></div>

    <div >
        <img className="Ethan" src="/EFL.jpg" alt="my image" width="1500" height="300" />
    </div>
    <br />
    <div className="card">
        <ul>
            <h2>Description = "If you are looking to run some popular waterfalls EFL is for you!. Starting off with Sunset falls which is known as one of the friendlyiest waterfalls you can run followed by continuos rapids leading into more falls. The river is surrounded by beautiful forrest along a road allowing walks out through out the run</h2>
            <h2>Class = "IV</h2> 
            <h2>RunLength = "3.8 miles</h2>
            <h2>PutIn = "Sunset Falls rec area</h2> 
            <h2>TakeOut = "After Horse Shoe falls on your right</h2> 
            <h2>Location = "Yacolt, Washington</h2> 

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

export default function clackamasUpper() {
    return (
        <Layout content={journalEntry} />

    );
}