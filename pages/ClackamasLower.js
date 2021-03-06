import Layout from '../components/Layout';
import Link from 'next/link';

const journalEntry = <div>
    <div className="header"><h1>Clackamas, lower </h1></div>

    <div >
        <img className="Ethan" src="/Lclack.webp" alt="my image" width="1500" height="300" />
    </div>
    <br />
    <div className="card">
        <ul>
        
        <h2>Description: "Long run with fun class two rapids perfect for beginers and floaters. The rapids are short with pool drops. Depending on flow, has some great play featur:s</h2>  
        <h2>Class: II RunLength: 21.8 Miles</h2>
        <h2>PutIn: Mciver(upper and lower park area), Feldheimer, Barton , Carver</h2>   <h2>TakeOut:  Feldheimer, Barton Park , Carver Park, Clackamette park </h2>
        <h2>Location: Estacada, Oregon</h2>

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