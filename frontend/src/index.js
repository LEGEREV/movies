import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{BrowserRouter} from 'react-router-dom';
//import * as serviceWorker from '.serviceWorker'

//https://stackoverflow.com/questions/30098835/how-can-i-create-a-database-in-mongodb-and-import-the-data-from-a-csv-to-its-col
//mongoimport --db nxtshow --collection movies --type csv --file ./mongo/movies.csv --fields id,imdb_url,release_date,title,video_release_date
//Save given Excel file as a CSV file. i.e Goto File->Save As->example.csv
//Copy the file path. Example case C:\Users\excelData\example.csv
//Open your command window and execute the following command: mongoimport - -db databaseName - -collection collectionName - -type csv - -file C:\User\excelData\example.csv - - headerline
//Note:In worst case if the above method doesn’t work go to your file location and open command prompt there.After opening the cmd execute the following command
//mongoimport - -db databaseName - -collection collectionName - - type csv - -file example.csv - - headerline



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

ServiceWorker.unregister();
reportWebVitals();
