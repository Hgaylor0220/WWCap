import Layout from '../components/Layout';
import Link from 'next/link';

const journalEntry = <div>
    <div className="header"><h1>John Day</h1></div>

    <div >
        <img className="Ethan" src="/JohnDay.jpg" alt="my image" width="1500" height="300" />
    </div>
    <br />
    <div className="card">
        <ul>
            <h2>Description: "Looking for a great family adventure? the John day river might be the river for you. Its a beautiful river surrounded by canyons. This normally is a three day trip down with rapids ranging from class II- III </h2>
            <h2>Class: "II-III </h2>
            <h2>RunLength: "69 Miles </h2>
            <h2>PutIn: "Bridge in Clarno where Oregon 218 crosses the river. </h2>
            <h2>TakeOut: "Cooton wood bridge where Oregon 206 crosses the river</h2>
            <h2>Location: "Spray, Oregon</h2> 

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