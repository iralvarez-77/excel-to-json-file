import { useState } from 'react';
import * as XLSX from "xlsx";

export default function App() {

  const [file, setFile] = useState();
  const handleChange = async (e) => {
    const file = e.target.files[0];

    const data = await file.arrayBuffer();

    const workbook = XLSX.read(data);

    const worksheet = workbook.Sheets[workbook.SheetNames[1]];

    const sheet = XLSX.utils.sheet_to_json(worksheet);
    setFile(sheet);

    console.log(sheet);
  };

  return (
    <div className="App">
      <h1>Converting file.xlsx to file.json</h1>
      <form>
        <input
          type="file"
          id="file"
          onChange={handleChange}
          accept=".xlsx"
          multiple
        />
      </form>
      {/* <ul>
        {file?.map((item) => (
          <li key={item.Cliente}>{item.Cliente}</li>
        ))}
      </ul> */}
    </div> 
  );
}
