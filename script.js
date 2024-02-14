
let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
   let developers=arr.filter((emp)=>emp.profession ==="developer").map((dev)=>dev)
   console.log(developers)
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
arr.filter((emp)=>{
        return emp.profession ==="developer"
    }).forEach((dev)=>{
        console.log(dev)
    })
  }
  function addData() {
    //Write your code here, just console.log
    let newemp={id:4,name:"susan",age:"20",profession:"intern"} 
   arr.push(newemp)
   console.log(arr) 
  }
  function removeAdmin() {
    //Write your code here, just console.log
    let removeAdmin=arr.filter((emp)=>{
        return emp.profession !=="admin"
    })
    console.log(removeAdmin)
    
    
  }
  function concatenateArray() {
    //Write your code here, just console.log
    let arr1=[
        { id: 4, name: "swati", age: "20", profession: "admin" },
    { id: 5, name: "kunal", age: "29", profession: "admin" },
    ];
    let arr2=[
        { id: 6, name: "janki", age: "21", profession: "developer" },
    { id: 7, name: "karen", age: "29", profession: "admin" },
    ];
    let arr3=[
        { id: 8, name: "jacky", age: "30", profession: "developer" },
    { id: 9, name: "kriti", age: "29", profession: "admin" },
    ]

     //let newArray=[...arr,...arr1,...arr2,...arr3]
     let newArray=arr.concat(arr1).concat(arr2).concat(arr3)
     console.log(newArray)
  }