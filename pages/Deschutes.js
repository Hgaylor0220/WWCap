import Layout from '../components/Layout';
import Link from 'next/link';

const journalEntry = <div>
    <div className="header"><h1>Deschutes</h1></div>

    <div >
        <img className="Ethan" src="/Ethan.jpg" alt="my image" width="1500" height="300" />
    </div>
    <br />
    <div className="card">
        <ul>
            <h2> Description: Day trip, Multiday or just a run. Deschutes has it all. The river has over 15 different runs ranging from class I-V for all different skill levels.The rapids are ranging from continuos wave trains to pool drop excitement. If the water doesnt take your breath away the scienery will. You can do commercial runs and private runs on this river. Good for rafting, kayaking, IK and more!  , </h2>
                <h2>Class: III,</h2>
                <h2>RunLength: 52.4 miles, </h2> 
                <h2>PutIn: Warm Springs, </h2>
                <h2>TakeOut: Sandy Beach,</h2> 
                <h2>Location: Bend, Oregon</h2>
    
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