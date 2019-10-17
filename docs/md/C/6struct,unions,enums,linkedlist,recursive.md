# Union & Enum

```c
#include <stdio.h>

// In the last tutorial I talked about weight and height
// but there are many ways to weigh and measure.
// Weight: pounds, grams, kilograms, milligrams, ounces
// Measurement: centimeter, feet, inch, millimeter

// Let's say I sell oranges in different forms.
// Per Orange: $.45
// Per Pound: $1.14 
// Orange Juice (16oz): $2.43

// A union allows you store one piece of data that can
// be of a different type. You can't store multiple
// values though. 

// It wouldn't be normal if a customer asks to buy one 
// orange, for you to quote the price for just the juice.
// A union also doesn't store all 3 values, but instead
// only 1 of the 3.

void main(){
	
	typedef union{
	
		// Nobody is going to buy 255 oranges for $114.75 
		// individually when they can buy in pounds 
		// for $96.90. That is why a 2 byte short works
		// We are also not going to sell 1/2 an orange
	
		short individual; 
		float pound;
		float ounce;
	
	} amount;
	
	// The Designated Initializer is used to set a union field
	
	amount orangeAmt = {.ounce = 16};
	
	// You can also set the value with the dot operator
	
	orangeAmt.individual = 4;
	
	/*------------------------------
	A Union Only Holds 1 Value at a Time
	It may seem as if it can hold more, but that's a 
	coincidence because values are stored in the same
	block of data.
	------------------------------*/
	
	// This may or may not work because individual and not
	// ounce is the stored value now
	
	printf("Orange Juice Amount: %.2f : Size: %d\n\n",
		orangeAmt.ounce, 
		sizeof(orangeAmt.ounce));
		
	// If you put %f in instead of %d, you MAY get the ounces
		
	printf("Number of Oranges: %d : Size: %d\n\n",
		orangeAmt.individual, 
		sizeof(orangeAmt.individual));
		
	// Get the location in memory
		
	printf("Indiv Location: %d\n\n", &orangeAmt.individual);
		
	orangeAmt.pound = 1.5;
	
	printf("Pounds of Oranges: %.2f : Size: %d\n\n",
		orangeAmt.pound, 
		sizeof(orangeAmt.pound));
		
	// This location is the same as individual
		
	printf("Pound Location: %d\n\n", &orangeAmt.individual);
		
	// You can use Unions in Structs
	
	typedef struct{
	
		char *brand;
		amount theAmount;
	
	} orangeProduct;
	
	// You can initialize with a Designated Initializer 
	// here as well
	
	orangeProduct productOrdered = {"Chiquita",
		.theAmount.ounce = 16};
		
	// You print out with the dot operator
		
	printf("You bought %.2f ounces of %s oranges\n\n",
		productOrdered.theAmount.ounce, 
		productOrdered.brand);
		
	// Now back to the problem above where we get bad
	// data if the wrong conversion character. 
	// First we have to learn about enums though
	
	// An enum is used when you only will ever need
	// a limited number of possible values.
	
	typedef enum{ 
		INDIV, OUNCE, POUND } quantity;
		
	quantity quantityType = INDIV;
		
	orangeAmt.individual = 4;
		
	if(quantityType == INDIV){
	
		printf("You bought %d oranges\n\n",
			orangeAmt.individual);
	
	} else if(quantityType == OUNCE){
	
		printf("You bought %.2f ounces of oranges\n\n",
			orangeAmt.ounce);
	
	} else {
	
		printf("You bought %.2f pounds of oranges\n\n",
			orangeAmt.pound);
	
	}
		
}
```

# Linked list & Recursive structure

```c
#include <stdio.h>

typedef struct product{
	
		const char *name;
		float price;
		
		// Added to make a Recursive Structure
		// product also must be listed above with
		// a Recursive Structure
		
		struct product *next;
	
} product;

// Cycles through the Linked List and prints it

void printLinkedList(product *pProduct){

	// While the value for next isn't NULL
	// which signals the end of the list keep going

	while(pProduct != NULL){
	
		// Printing values using (*) and ->
	
		printf("A %s costs %.2f\n\n",
			(*pProduct).name,
			pProduct->price);
			
		// Switch to the next item in the Linked List
			
		pProduct = pProduct->next;
	
	}

}

void main(){

	// If you had a bunch of products in your store
	// you could store them in an array, but that
	// limits you because they have a fixed length
	
	// product theProducts[20];
	
	// A Linked List however can store an unlimited
	// number of items. 
	// It is called a linked List because it contains
	// an item and a link to the next item in a list.
	
	// Another benefit to a Linked List is that you can
	// insert new items any place in the list.
	
	// To make a Linked List of Structs requires each 
	// Struct to contain a link to the next. 
	// (Recursive Structure)
	
	// I'm creating the products and setting each
	// next to null
	
	product tomato = {"Tomato", .51, NULL};
	product potato = {"Potato", 1.21, NULL};
	product lemon = {"Lemon", 1.69, NULL};
	product milk = {"Milk", 3.09, NULL};
	product turkey = {"Turkey", 1.86, NULL};
	
	// Now assign a pointer to the value of next
	
	tomato.next = &potato;
	potato.next = &lemon;
	lemon.next = &milk;
	milk.next = &turkey;
	
	// What do we do if we want to insert Apples after
	// the lemon?
	
	product apple = {"Apple", 1.58, NULL};
	
	// Change the values for next
	
	lemon.next = &apple;
	apple.next = &milk;
	
	printLinkedList(&tomato);
	
}
```