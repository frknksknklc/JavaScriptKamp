/*
1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. 
Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5)*/

function findPrime(...numbers){
    for (let i = 0; i < numbers.length; i++) {
       if(isPrime(numbers[i]))
       console.log(numbers[i] + " is a prime number")
       else
       console.log(numbers[i] + " is not prime number")      
    }
}

//gönderilen sayının asal olup olmadığını belirten function
function isPrime(number){
    let counter = 0
    for (let i = 2; i < number; i++) {
        if(number == 1 || number == 2){            
            return true
        }
        else if (number%i == 0)
            counter ++
    }
    if (counter == 0) {
        return true
    }
    else 
        return false
}

findPrime(2,5,8,21,13)
findPrime(3,5)

/*2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. (Arkadaş sayılar için google)
İki sayı birbirinin kendisi hariç pozitif bölenleri toplamına eşitse bu sayılara arkadaş sayılar denir.
En küçük arkadaş sayı çifti 200 ve 284’tür. Bu iki sayı arkadaş sayıdır çünkü 220’nin kendisi hariç pozitif bölenlerinin toplamı 284’e, 284’ün kendisi hariç pozitif bölenlerinin toplamı 220’ye eşittir.

220’nin kendisi hariç pozitif bölenlerinin toplamı : 1 + 2 + 4 + 5 + 10 + 11 + 20 + 22 + 44 + 55 + 110 = 284

284’ün kendisi hariç pozitif bölenlerinin toplamı : 1 + 2 + 4 + 71 + 142 = 220
*/

function friendNumbers(number1, number2){
    let total1 = 0
    let total2 = 0

    for(let i = 1; i< number1; i++){
        if(number1 % i == 0){
            total1 += i;
        }
    }

    for(let i = 1; i< number2; i++){
        if(number2 % i == 0){
            total2 += i;
        }
    }

    if(number1 == total2 && number2 == total1){
        console.log( number1 + " ve "+ number2 + " arkadaş sayılardır")
    }
    else{
        console.log( number1 + " ve "+ number2 + " arkadaş sayı değildirler")

    }
}

friendNumbers(220,284)
friendNumbers(3,5)

/*3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
Kendisi hariç bütün pozitif bölenlerinin toplamı kendisine eşit olan sayılara mükemmel sayı denir.

6 bir mükemmel sayıdır. Çünkü 6’nın pozitif bölenleri 1,2,3 ve 6’dır. Kendisi hariç diğer bölenlerini toplarsak 1+2+3=6 eder.*/

for (let i = 1; i <= 1000; i++) {
    let total = 0;
    for (let j = 1; j < i; j++) {
        if (i%j==0) {
            total = total + j
        }
        
    }
    if (total==i ) {
        console.log([i]+ " sayısı mükemmel sayıdır")
    }

    
}

/*4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.*/

function allPrimeNumbers() {
    let counter = 2
   
    let primeNumbers = []

    for (let i = 2; i < 1000;i++) {
        let isPrime = true
       for (let j = 2; j < i; j++) {
           if (i % j == 0) {
               isPrime = false
           }
       }
       if (isPrime) {
           primeNumbers.push(i)
       }
    }

    console.log(...primeNumbers)
}

allPrimeNumbers()


