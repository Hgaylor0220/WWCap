import Layout from '../components/Layout';
import Link from 'next/link';

const journalEntry = <div>
    <div className="header"><h1>Jordan Creek</h1></div>

    <div >
        <img className="Ethan" src="/Ethan.jpg" alt="my image" width="1500" height="300" />
    </div>
    <br />
    <div className="card">
        <ul>
            <h2> Description: Jordan creek is a beautifule narrow ruver that leads into the Wilson river, There are continuos class III rapids all the way down. If you enjoy narrow streams and technical moves this is the river for you to improve your creek boat skills. This is a river that has a couple of tricky spots always a great idea to scout out a rapid if you are not familular with the run. This is an area for active logging so alway be on guard for wood in the water.</h2>
                <h2> Class: III+, </h2>
                    <h2>RunLength: 6.5 miles</h2>
                     <h2>PutIn: Hann Bridge, which is about 5 miles up from put in. Stay on the road that follows the river right.</h2>
                    <h2>TakeOut: Mile post 18, the bridge over Jordan creek. Where the Wilson river meets</h2>  
                     <h2>Location: Tillamook, Oregon</h2>

    </ul>
</diov>
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

export default function JordanCreek() {
    return (
        <Layout content={journalEntry} />

    );
}