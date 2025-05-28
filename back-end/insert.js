// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '12345',
//   database: 'MediWebMotion'
// });

// const projects = [

//   ["congres-agrumes", "congres-agrumes.png", "https://congres-agrumes.ma/"],
//   ["topeventproduction", "topeventproduction.png", "https://topeventproduction.com/"],
//   ["grafcet", "grafcet.png", "https://grafcet.ma/" ],
//   ["vetimat", "vetimat.png", "https://vetimat.ma/"],
//   ["connecting-morocco", "connecting-morocco.png", "https://connecting-morocco.com/"],
//   ["makina", "makina.png", "https://makina.ma/"],
//   ["alomrafacility", "alomrafacility.png", "http://alomrafacility.com/"],
//   ["soluzionamaroc", "soluzionamaroc.png", "https://soluzionamaroc.com/"],
//   ["alomraguarding", "alomraguarding.png", "https://alomraguarding.com/"],
  
//  ["centaurecom-agency", "centaurecom-agency.png", "https://centaurecom-agency.com/"],
//  ["studypass", "studypass.png", "https://studypass.fr/"],
//  ["mycanadiansucces", "mycanadiansucces.png", "https://www.mycanadiansucces.com/"],
//  ["gazal", "gazal.png", "http://gazal.ma/"],
//  ["aromessence", "aromessence.png", "https://aromessence.ma/"],
// ["groupeshiru", "groupeshiru.png", "https://groupeshiru.ma/"],
// ["aminelahlou", "aminelahlou.png", "http://aminelahlou.ma/"],
// ["africamedinvest", "africamedinvest.png", "http://africamedinvest.com/"],
// ["zalar", "zalar.png", "https://zalar.ma/"],
// ["thecasablancaclub", "thecasablancaclub.png", "https://thecasablancaclub.com/"],
// ["somapaf", "somapaf.png", "https://somapaf.ma/"],
// ["semind", "semind.png", "https://semind.ma/"],
// ["riverstream-consult", "riverstream-consult.png", "https://riverstream-consult.com/"],
// ["gelacom-group", "gelacom-group.png", "https://gelacom-group.com/"],
// ["intergrues", "intergrues.png", "https://intergrues.ma/"],
// ["eulersolutions", "eulersolutions.png", "https://eulersolutions.com/"],
// ["control-risk-intelligence", "control-risk-intelligence.png", "http://control-risk-intelligence.com/"],
// ["cirex-system-maghreb", "cirex-system-maghreb.png", "http://cirex-system-maghreb.com/"],
// ["arbor", "arbor.png", "https://arbor.ma/"],

// ["crechesprivees", "crechesprivees.png", "http://crechesprivees.ma/"],
// ["alomraintelligence", "alomraintelligence.png", "https://alomraintelligence.com/"],

// ["alomracyberdefense", "alomracyberdefense.png", "https://alomracyberdefense.com/"],
// ["optima-peintures", "optima-peintures.png", "https://optima-peintures.ma/"],

// ["sentiloc", "sentiloc.png", "https://sentiloc.com/"],
// ["gestauto", "gestauto.png", "https://gestauto.ma/"]
  
  
// ];


// const sql = 'INSERT INTO projects (tittle, image_url, website_url) VALUES ?';

// connection.query(sql, [projects], (err, result) => {
//   if (err) throw err;
//   console.log('Inserted:', result.affectedRows);
//   connection.end();
// });



// Run this once to hash your password
const bcrypt = require('bcrypt');
const password = 'admin123';
bcrypt.hash(password, 10).then(console.log);

























