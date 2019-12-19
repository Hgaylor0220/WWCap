import Layout from '../components/Layout';
import Link from 'next/link';


const journalEntry = <div>
    <div className="header"><h1>Rogue River</h1></div>
    <div >
        <img className="Ethan" src="/Ethan.jpg" alt="my image" width ="1500" height="300" />
    </div>
    <br/>
    <div className="card">
    <ul>
    <div className= "description">
                <h2> Description:This is a great run for skilled coateers with a lot of play boating features. Some of the rapids can be very technical, advisory scouting prior to running rapids if you have not done it before. Nugget Falls and Ti'lomikh falls can present some difficulties. Ti'lomikh must be scouted from the road prior to put in. </h2>
                <h2>Class:IV</h2>
                <h2> RunLength:4.6 miles</h2>
                <h2>PutIn:Follow Oregon 234 for a couple miles to a old gravel road, put in is below Lymans</h2>  
                <h2>TakeOut:Gold Hill Sports park boat ramp </h2>
                <h2>Location:Central Point, Oregon</h2>
</div>
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

export default function RogueRiver() {
    return (
        <Layout content={journalEntry} />

    );
}