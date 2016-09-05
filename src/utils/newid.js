let lastId = 0;

export default function(prefix='id') {
    lastId++;
    return `${prefix}${lastId}`;
}


// http://stackoverflow.com/questions/29420835/how-to-generate-unique-ids-for-form-labels-in-react
