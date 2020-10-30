// creare un oggetto che rappresenta uno studente: ogni studente è caratterizzato da un nome, un cognome e un'età. Attraverso un ciclo for-in stampare a schermo tutte le sue proprietà e il relativo valore
//creo un oggetto contenente i dati dello studente
console.log('this is the first exercize');
var student = {
    'name' : 'Lionel',
    'lastName' : 'Messi',
    'age' : 33
};
console.log(student);
//creo ciclo for in per stampare a schermo le sue proprietà
for (var key in student) {
    console.log(key + ': ' + student[key]);
}

console.log('this is the second exercize');
// creare un array di oggetti "studente". Ciclare su tutti gli studenti e stampare per ciascuno il nome e il cognome
//creo array di oggetti
var students = [
    {
        'name' : 'Lionel',
        'lastName' : 'Messi',
        'age' : 33
    },
    {
        'name' : 'Cristiano',
        'lastName' : 'Ronaldo',
        'age' : 35
    },
    {
        'name' : ' Zlatan',
        'lastName' : 'Ibrahimovic',
        'age' : 39
    },
];

//creo ciclo for per stampare ogni singolo studente e le sue proprietà
for (var i = 0; i < students.length; i++) {
    currentStudent = students[i];
    for (var key in currentStudent) {
        if (key != 'age') {
            console.log(key + ': ' + currentStudent[key]);
        }

    }
}


// tramite 3 prompt, chiedere all'utente il nome, il cognome e l'età di un nuovo studente. Creare con questi dati un nuovo oggetto e inserirlo nell'array del punto precedente.
