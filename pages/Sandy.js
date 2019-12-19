import Layout from '../components/Layout';
import Link from 'next/link';

const journalEntry = <div>
    <div className="header"><h1>Sandy</h1></div>
    <div >
        <img className="Ethan" src="/SandyR.jpg" alt="my image" width="1500" height="300" />
    </div>
    <br />
    <div className="card">
        <ul>

            
                <h2>Description: Beautiful foresty run, with no raods on the side, so if you are in need of walking out it could be an adventure! The rapids are followed by a nice pool drop at the end making this a great run to have some fun,</h2>
                <h2>Class: II -III,</h2>  
                <h2>RunLength: 6.8 miles,</h2> 
                <h2>PutIn: Dodge Park, </h2>
                <h2>TakeOut: Oxbow Park,</h2>
                <h2>Location: Sandy, Oregon</h2> 

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