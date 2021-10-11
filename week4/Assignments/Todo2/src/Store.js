import {v4 as uuidv4} from 'uuid'

export const listoftodos = [
    {
        id: uuidv4(),
        text: 'FSW-123 homework',
        isCompleted: true
    },
    {
        id: uuidv4(),
        text:'FSW-125 homework',
        isCompleted: false
    },
    {
        id: uuidv4(),
        text:'Give the dog a bath',
        isCompleted: false
    },
    {
        id: uuidv4(),
        text:'Do the laundry',
        isCompleted: true
    }
]
