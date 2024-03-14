import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavigationService } from '../Services/navigation.service';
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/posts.controller';


//import { fs } from 'fs';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-Welcome',
  templateUrl: 'Welcome.page.html',
  styleUrls: ['Welcome.page.scss']
})
export class WelcomePage {

  public baseURL = "sunriseconnectionsserver.mysql.database.azure.com";

  zoomFactor = 1;
  
  constructor(private httpClient: HttpClient, private ns: NavigationService){
  }

  navigateTo(destination: string){
    this.ns.navigateTo(destination);
  }//


  public getData(): Observable<any>{
    let temp: Observable<any> = this.httpClient.get(this.baseURL)!;
    console.log(temp);
    console.log(temp['source']);
    console.log(temp['operator']);
    return temp;
  }
    /* Create Program*/




    /*function queryDatabase()
    {
        conn.query('DROP TABLE IF EXISTS inventory;',
            function (err, results, fields) {
                if (err) throw err;
                console.log('Dropped inventory table if existed.');
            }
        )
        conn.query('CREATE TABLE inventory (id serial PRIMARY KEY, name VARCHAR(50), quantity INTEGER);',
            function (err, results, fields) {
                if (err) throw err;
                console.log('Created inventory table.');
            }
        )
        conn.query('INSERT INTO inventory (name, quantity) VALUES (?, ?);', ['banana', 150],
            function (err, results, fields) {
                if (err) throw err;
                else console.log('Inserted ' + results.affectedRows + ' row(s).');
            }
        )
        conn.query('INSERT INTO inventory (name, quantity) VALUES (?, ?);', ['orange', 250],
            function (err, results, fields) {
                if (err) throw err;
                console.log('Inserted ' + results.affectedRows + ' row(s).');
            }
        )
        conn.query('INSERT INTO inventory (name, quantity) VALUES (?, ?);', ['apple', 100],
            function (err, results, fields) {
                if (err) throw err;
                console.log('Inserted ' + results.affectedRows + ' row(s).');
            }
        )
        conn.end(function (err) {
            if (err) throw err;
            else  console.log('Done.')
        });
        };
        */
         // Method to increase font size
        zoomIn() {
            this.zoomFactor += 0.1; // Increase zoom factor by 0.1
            document.documentElement.style.setProperty('--zoom-factor', this.zoomFactor.toString()); // Update zoom factor in CSS
        }
        
        // Method to decrease font size
        zoomOut() {
            this.zoomFactor -= 0.1; // Decrease zoom factor by 0.1
            document.documentElement.style.setProperty('--zoom-factor', this.zoomFactor.toString()); // Update zoom factor in CSS
        }
    }

    //Source: https://learn.microsoft.com/en-us/azure/mysql/flexible-server/connect-nodejs?tabs=windows



    /* Read Program
    const mysql = require('mysql2');
    const fs = require('fs');

    var config =
    {
        host: 'your_server_name.mysql.database.azure.com',
        user: 'your_admin_name',
        password: 'your_admin_password',
        database: 'quickstartdb',
        port: 3306,
        ssl: {ca: fs.readFileSync("your_path_to_ca_cert_file_DigiCertGlobalRootCA.crt.pem")}
    };

    const conn = new mysql.createConnection(config);

    conn.connect(
        function (err) {
            if (err) {
                console.log("!!! Cannot connect !!! Error:");
                throw err;
            }
            else {
                console.log("Connection established.");
                readData();
            }
        });

    function readData(){
        conn.query('SELECT * FROM inventory',
            function (err, results, fields) {
                if (err) throw err;
                else console.log('Selected ' + results.length + ' row(s).');
                for (i = 0; i < results.length; i++) {
                    console.log('Row: ' + JSON.stringify(results[i]));
                }
                console.log('Done.');
            })
        conn.end(
            function (err) {
                if (err) throw err;
                else  console.log('Closing connection.')
        });
};


/* Update Program
const mysql = require('mysql2');
const fs = require('fs');

var config =
{
    host: 'your_server_name.mysql.database.azure.com',
    user: 'your_admin_name',
    password: 'your_admin_password',
    database: 'quickstartdb',
    port: 3306,
    ssl: {ca: fs.readFileSync("your_path_to_ca_cert_file_DigiCertGlobalRootCA.crt.pem")}
};

const conn = new mysql.createConnection(config);

conn.connect(
    function (err) {
        if (err) {
            console.log("!!! Cannot connect !!! Error:");
            throw err;
        }
        else {
            console.log("Connection established.");
            updateData();
        }
    });

function updateData(){
       conn.query('UPDATE inventory SET quantity = ? WHERE name = ?', [75, 'banana'],
            function (err, results, fields) {
                if (err) throw err;
                else console.log('Updated ' + results.affectedRows + ' row(s).');
           })
       conn.end(
           function (err) {
                if (err) throw err;
                else  console.log('Done.')
        });
};
*/

/* Delete Program

const mysql = require('mysql2');
const fs = require('fs');

var config =
{
    host: 'your_server_name.mysql.database.azure.com',
    user: 'your_admin_name',
    password: 'your_admin_password',
    database: 'quickstartdb',
    port: 3306,
    ssl: {ca: fs.readFileSync("your_path_to_ca_cert_file_DigiCertGlobalRootCA.crt.pem")}
};

const conn = new mysql.createConnection(config);

conn.connect(
    function (err) {
        if (err) {
            console.log("!!! Cannot connect !!! Error:");
            throw err;
        }
        else {
            console.log("Connection established.");
            deleteData();
        }
    });

function deleteData(){
       conn.query('DELETE FROM inventory WHERE name = ?', ['orange'],
            function (err, results, fields) {
                if (err) throw err;
                else console.log('Deleted ' + results.affectedRows + ' row(s).');
           })
       conn.end(
           function (err) {
                if (err) throw err;
                else  console.log('Done.')
        });
};

*/


