/*
Créé une fonction getFibonacciSequence qui prend un nombre n en paramètre et retourne un tableau contenant les n premiers nombres de la suite de Fibonacci.

Détails

* La suite de Fibonacci commence par les nombres 0 et 1.
* Chaque nombre suivant est la somme des deux nombres précédents.
* Par exemple, pour n = 5, la fonction devrait retourner [0, 1, 1, 2, 3].

Si n est inférieur ou égal à 0, la fonction doit retourner un tableau vide []
*/

function getFibonacciSequence(size: number): number[] {
  // afficher le premier terme
  let n= prompt(),
  let n= number(n) ;

  // initialiser les 2 premiers termes
  let a = 0;
  let b = 1;
  // initialisation du tableau avec les deud premiers termes
  let getFibonacciSequence = [0,1];
    for (let i= 0;i < n; i ++){
      console.log(getFibonacciSequence[0])
      getFibonacciSequence.push((getFibonacciSequence[i-1])+(getFibonacciSequence[i-2]));
    }
 }
  
  // afficher 1e terme
  console.log((getFibonacciSequence[0])); 

  // Your code here !
  return [1];


if(n<=0){
  return(
    console.log([n]) 
    // afficher un tableau vide
  )
}

export default getFibonacciSequence;
