const students = [
    {id:2,name:'Jhalak'},
    {id:12,name:'Palak'},
    {id:25,name:'Balak'},
    {id:82,name:'Tilak'},
]
const sName = students.map(s => s.name);
const sId = students.map(s =>s.id);
const sIdName = students.filter(s =>s.id<25);
const sIdName1 = students.find(s =>s.id<25);

console.log(sName);
console.log(sId);
console.log(sIdName);
console.log(sIdName1);
