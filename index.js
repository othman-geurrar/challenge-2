// Fetch User Data
const fetchUserData = async () => {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    return data.users; 
};

// processUserData
const processUserData = (users)=> {
    return users
            .filter(({gender})=> gender !== 'male')
            .map(({firstName , age})=> `Name : ${firstName}, Age : ${age}`) ;   
}

// summarizeAge 
const summarizeAge  = (users)=>{
    return users
            .filter(({gender})=> gender === "male")
            .reduce((totale , {age})=> totale + age ,0)
}

fetchUserData().then((users)=> {
    const processUser = processUserData(users);
    const totaleAge = summarizeAge(users);
    console.log('Processed users :', processUser)
    console.log('totale age of male users ', totaleAge)
})