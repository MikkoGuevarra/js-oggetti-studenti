// creare un oggetto che rappresenta uno studente: ogni studente è caratterizzato da un nome, un cognome e un'età. Attraverso un ciclo for-in stampare a schermo tutte le sue proprietà e il relativo valore
//creo un oggetto contenente i dati dello studente
$(document).ready(function(){
    console.log('this is the first exercize');
    var student = {
        'name' : 'Lionel',
        'lastName' : 'Messi',
        'age' : 33
    };
    console.log(student);

    //method to print a single part of object
    console.log('the name is ' + student['name']);
    //creo ciclo for in per stampare a schermo le sue proprietà
    for (var key in student) {
        console.log(key + ': ' + student[key]);
    }

    $('.first-exercize').append('<div>Name: ' + student['name'] + '</div>');
    $('.first-exercize').append('<div>Last Name: ' + student['lastName'] + '</div>');
    $('.first-exercize').append('<div>Age: ' + student['age'] + '</div>');
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
            //stampo solo nome cognome
            //verifico se key è diverso da age e stampo
            if (key != 'age') {
                console.log(key + ': ' + currentStudent[key]);
                $('.second-exercize').append('<div>' +  key + ': ' + currentStudent[key] + '</div>');
            }
        }
    }


    // tramite 3 prompt, chiedere all'utente il nome, il cognome e l'età di un nuovo studente. Creare con questi dati un nuovo oggetto e inserirlo nell'array del punto precedente.
    console.log('this is the third exercize');
    var name = prompt('What is your name?');

    var lastName = prompt('What is your  Last name?');

    var age = prompt('How old are you?');

    students.push({name, lastName, age});
    console.log(students);
    console.log('----------------------------');
    console.log('final print');

    for (var i = 0; i < students.length; i++) {
        currentStudent = students[i];
        for (var key in currentStudent) {
            console.log(key + ': ' + currentStudent[key]);

        }
    }

});
