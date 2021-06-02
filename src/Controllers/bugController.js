import bugModel from '../Models/bugModel';

export function retrieveBugs(){
    let data = [];

    data.push(new bugModel({
        _id:23456780,
        name: 'Crash on Load',
        details: 'crashes after 3 seconds',
        steps: 'open application and it will crash',
        version: 'version 2.0',
        assigned: 'Lori Orford',
        creator: 'Joe Bloggs',
        priority: 1,
        time: "23:30"
    }))
    data.push(new bugModel({
        _id:23456780,
        name: 'Crash on Load',
        details: 'crashes after 3 seconds',
        steps: 'open application and it will crash',
        version: 'version 2.0',
        assigned: 'Lori Orford',
        creator: 'Joe Bloggs',
        priority: 3,
        time: "23:38"
    }))

    let sorted = data.sort((a, b)=>{return a.priority - b.priority})
    return sorted;
}