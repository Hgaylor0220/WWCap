import Layout from '../components/Layout';
import Link from 'next/link';

const journalEntry = <div>
    <div className="header"><h1>Mckenzie</h1></div>

    <div >
        <img className="Ethan" src="/Ethan.jpg" alt="my image" width="1500" height="300" />
    </div>
    <br />
    <div className="card">
        <ul>
            <h2>Description:Beautiful river with class two rapids and pool drops. Great for beginners. This run is normally split into three differnent sections. Olallie Campground to Paradise Campground,  Paradise to Finn Rock and inn Rock to Leaburg Dam.</h2>  
            <h2>Class:II-III</h2> 
            <h2>RunLength: Miles, </h2>
            <h2>PutIn: Finn Rock, Ollalie Campground,Paradise Campground  </h2>
            <h2>TakeOut:Finn Rock, Paradise Campground ,Prince Helfrich Landing</h2> 
            <h2>Location:Eugene, Oregon</h2> 

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