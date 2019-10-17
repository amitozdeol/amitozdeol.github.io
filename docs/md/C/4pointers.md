# Pointers

```c
#include <stdio.h>

void main(){

	// When you compile and run your program you are provided
	// with a piece of memory in ram to store data like
	// variables.

	int rand1 = 12, rand2 = 15;
	
	// Each time you create an int 4 bytes of data are saved 
	// and that part of memory has an address you can use
	// to locate the data.
	
	// You can return that address by placing a & before 
	// the variable name in c.
	
	printf("rand1 = %p : rand2 = %p\n\n", &rand1, &rand2);
	
	// Sometimes these variables are stored next to each other 
	// and at other times that isn't true
	
	printf("Size of int %d\n\n", sizeof(int));
	
	// To assign the address to another variable proceed it with
	// an asterisk * 
	
	int * pRand1 = &rand1;
	
	// If we use %p we get the hexadecimal version of the address
	
	printf("Pointer %p\n\n", pRand1);	
	
	// If we use %d we get the decimal version of the address
	
	printf("Value %d\n\n", pRand1);
	
	// We have to use the * to get the value stored there
	// This is known as dereferencing the pointer
	// Dereferencing means to use the pointer to access the variable
	
	printf("Value %d\n\n", *pRand1);
	
	// ARRAYS AND POINTERS
	
	// An array name is pretty much a pointer
	
	int primeNumbers[] = {2,3,5,7};
	
	// We can print the values by index
	
	printf("First index : %d\n\n", 
		primeNumbers[0]);
		
	// You can print the first value also with *
	
	printf("First index with * : %d\n\n", 
		*primeNumbers);
	
	// You can use pointer arithmetic to access the other values
	// with *
	// This is in essence adding 1 to the address and since
	// it contains ints it jumps 4 bytes forward
	// Yes you can use it to get other data stored in memory
	
	printf("Second index with * : %d\n\n", 
		*(primeNumbers + 1));
		
	// ARRAYS OF STRINGS
	
	// To create an array of strings, you have to create an
	// array of pointers
	
	char * students[4] = {"Sally", "Mark", "Paul", "Sue"};
	
	// You can retrieve them now like any other data in an array
	
	for(int i = 0; i < 4; i++){
	
		printf("%s : %d\n\n", students[i], &students[i]);
	
	}

}
```


```c
#include <stdio.h>
#include <stdlib.h>

void generateTwoRandomNums(int rand1, int rand2){

	// Generates a random number from 1 to 50

	rand1 = rand() % 50 + 1;
	rand2 = rand() % 50 + 1;
	
	printf("New rand1 in function = %d\n\n", rand1);
	printf("New rand2 in function = %d\n\n", rand2);

}

// Improved pointerRandomNumbers()
// If an argument is a pointer put a * after the datatype

void pointerRandomNumbers(int* rand1, int* rand2){

	// You get the address of a variable by putting & in front
	// You access the data at that address by putting * in front
	
	// Saves these numbers to the space at the address

	*rand1 = rand() % 50 + 1;
	*rand2 = rand() % 50 + 1;
	
	// You retrieve the value already stored in the address
	// with star once again
	
	printf("New rand1 in pointer function = %d\n\n", *rand1);
	printf("New rand2 in pointer function = %d\n\n", *rand2);

}

// We refer to the array just like any other array

void editMessageSent(char* message, int size){

	char newMessage[] = "New Message";
	
	if(size > sizeof(newMessage)){
	
		for(int i = 0; i < sizeof(newMessage); i++){
		
			message[i] = newMessage[i];
		
		} 
	
	} else {
	
		printf("New Message is to big\n\n");
	
	}

}


void main(){

	int rand1 = 0, rand2 = 0;
	
	generateTwoRandomNums(rand1, rand2);
	
	// Why does the following not print the updated values?
	// Because the variable wasn't sent, but instead the value
	// stored in that variable was sent and then stored in 
	// the 2 new variables in the function named 
	// int rand1, int rand2
	
	printf("rand1 = %d\n\n", rand1);
	printf("rand2 = %d\n\n", rand2);
	
	// Why not have everything set as a global variable?
	// 1. Naming conflicts when using other functions
	// 2. It can be hard to figure out where changes are coming from
	// 3. It eliminates flexibility because you don't know if a 
	// change will effect another function
	
	// Solving the problem with pointers
	
	rand1 = 0, rand2 = 0;
	
	printf("Main Before Function Call\n\n");
	
	printf("rand1 = %d : rand2 = %d\n\n", rand1, rand2);
	
	// To pass the address for the variable in memory use &
	// You already did this above scanf(" %d", &whatToDo);
	
	pointerRandomNumbers(&rand1, &rand2);
	
	printf("Main After Function Call\n\n");
	
	printf("rand1 = %d : rand2 = %d\n\n", rand1, rand2);
	
	// Passing a String to a Function ----
	
	char randomMessage[] = "Edit my function";
	
	printf("Old Message: %s \n\n",
		randomMessage);
	
	editMessageSent(randomMessage, 
		sizeof(randomMessage));
		
	printf("New Message: %s \n\n",
		randomMessage);
	

}
```