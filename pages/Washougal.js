import Layout from '../components/Layout';
import Link from 'next/link';

const journalEntry = <div>
    <div className="header"><h1>Washougal </h1></div>
        
    <div >
        <img className="Ethan" src="/Ethan.jpg" alt="my image" width="1500" height="300" />
    </div>
    <br />
    <div className="card">
    <ul>
             <h2>Description: A great quick run that close to Portland and Vancouver. The river is surrounded by forest. There are beautiful bolder gardens and great play features on this river. </h2>
              <h2>Class: II-IV </h2>
               <h2>Run Length: 5 miles </h2>
                <h2>Put In: Public Fishing Road, Mile post 5  </h2>
                 <h2>Take Out: Mile post 3 on Washougal River Road, Hathaway Park</h2> 
                  <h2>Location: Washougal, Washington</h2>

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

export default function Washougal() {
    return (
        <Layout content={journalEntry} />

    );
}