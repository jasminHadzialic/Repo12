var contacts = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "number": "12365495208",
        "likes": ["C", "C++", "C#"]
    },
    {
        "firstName": "Jane",
        "lastName": "Doe",
        "number": "4568295761",
        "likes": ["Python", "Swift", "R"]
    },
    {
        "firstName": "Richard",
        "lastName": "Roe",
        "number": "6938257149",
        "likes": ["React", "Angular", "Vue"]
    },
    {
        "firstName": "Jane",
        "latName": "Roe",
        "number": "unknown",
        "likes": ["Javascript", "Node", "HTML & CSS"]
    }
];

function lookUpProfile(name, prop){
    for (var i = 0; i < contacts.length; i += 1) {
        var contact = contacts[i];

        if (contact.firstName === name) {
            if (contact[prop] != undefined) {
                return contact[prop];
            }
            return "No such property";
        }
    }
    return "No such contact";
}

console.log(lookUpProfile("John", "likes"));
console.log(lookUpProfile("Jane", "lastName"));
console.log(lookUpProfile("Rob", "number"));
console.log(lookUpProfile("John", "address"));
module.exports = lookUpProfile;
