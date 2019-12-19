import Layout from '../components/Layout';
import Link from 'next/link';

const journalEntry = <div>
    <div className="header"><h1>Canyon Creek </h1></div>

    <div >
        <img className="Ethan" src="/Ethan.jpg" alt="my image" width="1500" height="300" />
    </div>
    <br />
    <div className="card">
        <ul>
       
            <h2>Description: Great creek boat run with lots of waterfall features surrounded by lavish forrest. This run is a true class V, luering in all of the advance class V boaters. The river has countinuos drops with undercuts and lots of down wood. Being in a canyon the geology can change over time, changing the river features</h2> 
            <h2>Class: V</h2>, 
            <h2>RunLength: 7 miles</h2> 
            <h2>PutIn: East on US 20 for 2.7 miles and turn right on NF 2032 for about 7 miles till NF 145 then turn right. Go about 7 miles to the junction of Canyon Creek and turn right. Thenfo about a mile to NF 2026 and turn left. Put in will but up a little ways on h2the bridge.</h2> 
            <h2>TakeOut: Take US 20 past Canyon creek, turn left on spur road that will lead to the confluence of Canyon creen with the santiam River.</h2>, 
            <h2>Location: Salem, Oregon</h2>

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

export default function CanyonCreek() {
    return (
        <Layout content={journalEntry} />

    );
}