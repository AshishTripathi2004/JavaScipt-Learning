"use strict"

//stack memory--->copy based
let a=10
let b=a
console.log(a,b)
b=100
console.log(a,b)
a=150
console.log(a,b)

//heap memory--->reference based
let obj1={userId:11232,userName:"Ashish"}
let obj2=obj1
console.log(obj1.userId,obj2.userId)
obj1.userId=11111
console.log(obj1.userId,obj2.userId)

/*
MEMORY IN JavaScript:

1. STACK-BASED MEMORY:
   - Used for **primitives** (e.g., numbers, strings, booleans).
   - Each variable is stored in a separate memory location on the stack.
   - Reassignment creates a new value at the top of the stack.
   - Accessing a variable retrieves the most recent value (top of the stack).
   - Example:
     ```javascript
     let a = 10;  // 'a' is stored as 10 on the stack
     a = 20;      // 'a' now points to a new stack memory with value 20
     ```

2. HEAP-BASED MEMORY:
   - Used for **non-primitives** (e.g., objects, arrays, functions).
   - Objects are stored in the heap, and variables hold a reference (or pointer) to the memory location.
   - All references to the same object share the same memory location.
   - Modifying the object reflects in all references.
   - Example:
     ```javascript
     let obj1 = { name: "Alice" }; // 'obj1' points to the object in the heap
     let obj2 = obj1;             // 'obj2' also points to the same object
     obj2.name = "Bob";           // Modifies the object in the heap
     console.log(obj1.name);      // Output: "Bob" (shared memory)
     ```

Key Differences:
- Stack memory is used for **simple and temporary data**.
- Heap memory is used for **complex and long-lived data** (shared references).
*/
