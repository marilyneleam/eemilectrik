import { useState } from 'react';

 function Production() {
   const [file, setFile] = useState();
   const [array, setArray] = useState<any[]>([]);
 
   const fileReader = new FileReader();
 
   const handleOnChange = (e) => {
     setFile(e.target.files[0]);
   };
 
   const csvFileToArray = string => {
     const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
     const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");
 
     const array = csvRows.map(i => {
       const values = i.split(",");
       const obj = csvHeader.reduce((object, header, index) => {
         object[header] = values[index];
         return object;
       }, {});
       return obj;
     });
     var total = array.map((element: any) => element["AC output active power S"]);

     function round(num, precision) {
      precision = Math.pow(10, precision);
      return Math.ceil(num * precision) / precision;
     }

function table (this: any, hours, kw) {
  this.hours = hours;
  this.kw = kw;
}

     var i = 0;
     var j = 0;
     var k = 0;
     var l = 11;
     var z = 23;

     while (i < total.length -1)
     {
        var sum = 0;
        for (j = k ; j <= l && l <= total.length -1 ; j++) {
          sum = (Number(sum) + Number(total[j]) / 1000 );
        }
        k = j;
        l = l + 12;
        var tab = new table(z, round(sum, 2));

        console.table(tab);
        i+=12;
        z--;
     }

     setArray(array);
   };
 
   const handleOnSubmit = (e) => {
     e.preventDefault();
 
     if (file) {
       fileReader.onload = function (event) {
         const text = event.target!.result;
         csvFileToArray(text);
       };
 
       fileReader.readAsText(file);
     }
   };
 
   const headerKeys = Object.keys(Object.assign({}, ...array));
 
   return (
     <div style={{ textAlign: "center" }}>
       <h1>PRODUCTION</h1>
       <form>
         <input
           type={"file"}
           id={"csvFileInput"}
           accept={".csv"}
           onChange={handleOnChange}
         />
 
         <button
           onClick={(e) => {
             handleOnSubmit(e);
           }}
         >
           IMPORT CSV
         </button>
       </form>
 
       <br />
 
       <table>
         <thead>
           <tr key={"header"}>
             {headerKeys.map((key) => (
               <th>{key}</th>
             ))}
           </tr>
         </thead>
 
         <tbody>
           {array.map((item) => (
             <tr key={item.id}>
               {Object.values(item).map((val:any) => (
                 <td>{val}</td>
               ))}
             </tr>
           ))}
         </tbody>
       </table>
     </div>
   );
 }

export default Production;
