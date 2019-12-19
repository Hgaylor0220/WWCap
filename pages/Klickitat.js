import Layout from '../components/Layout';
import Link from 'next/link';

const journalEntry = <div>
    <div className="header"><h1>Klickitat</h1></div>

    <div >
        <img className="Ethan" src="/Ethan.jpg" alt="my image" width="1500" height="300" />
    </div>
    <br />
    <div className="card">
        <ul>
            <h2>Description: " Klikitat is not for the faint hearted solely based on getting on the river. It can be a little difficult with the canyon drops, step ledges and rocky hills. Once on the river it is a breath taking run surroundedby canyon forrest and crystal blue water. The run can be dangerous at high flow making rescues difficult. There are alot of potential hazards to this run with down wood and continuous class three rapids</h2>  
            <h2>Class: "III-IV </h2>
            <h2>RunLength: "11.6 miles</h2> 
            <h2>PutIn: "Icehouse Public Access </h2>
            <h2>TakeOut: "Klikitat Salmon Hatchery </h2>
            <h2>Location: "Pitt, Washington</h2>

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