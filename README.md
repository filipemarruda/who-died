# Check the correct position of died people

It's sounds weird how this problem is being approached here, but I think in a moment you'll understand why. The problem is to check, inside an array of people, that ones who died and return the position of them. Sounds easy, right? But wait, the tricky part is in the restrictions of the problem. You are called to refactor a code that is already working, but it's not efficient enough to meet the requirements of the company, they pay a little amount for each clock cycle that the code takes to run. So, you have to find a way to make it faster. There some good restrictions too, this is a very deep logic and the function just receive a limit-sized array of people.

**The gold tip:** When you do a loop, each statement will be processed by a core of the CPU in a clock cycle (considering that all of them are independent and could be done in parallel). To make the things easy, think that you are working in a one-core CPU. So, if you have a loop, every pace have to be multiplied to each inside strcution to get the total of clock cycles. The golden rule is: **Avoid loops**.

## Our approach

In order to have the minimum possible loops, we try to think in a way to represent the limit-sized array of live-or-died people as a sequence of bits, where each one represents if a person is alive or not. And them we will use the bitwise operators to do the job.

Just make an AND comparison between the sequence of bits and the sequence of bits representing all the people alive. The result will be the sequence of bits representing the people who died. And then, to get the position of them, we decide to use a hash table to store the possible results as the key, and the value will be and entire array containing the positions of the people who died. This way, we can avoid the loop to get the position of the people who died.