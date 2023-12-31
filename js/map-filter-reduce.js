const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const userLanguages = users.filter(user => user.languages.length >= 3);
console.log(userLanguages);

const userEmail = users.map(user => user.email);
console.log(userEmail);

const totalYears = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);
console.log('total years =>', totalYears);

const averageYears = totalYears / users.length;
console.log('average years =>', averageYears);

const longestEmail = users.reduce((longest, user) => {
    if (user.email.length > longest.length) {
         longest = user.email;
    }
    return longest;
}, users[0].email);
console.log('the longest email =>', longestEmail);

const instructors = users.reduce((names, user) => {
    return `${names} ${user.name}, `;
}, 'Your instructors are: ');
console.log(instructors);

const uniqueLanguages = users.reduce((languages, user) => {
    for (let language of user.languages) {
        languages.add(language);
    }
    return languages;
}, new Set([]));
    console.log([...uniqueLanguages]);
    
