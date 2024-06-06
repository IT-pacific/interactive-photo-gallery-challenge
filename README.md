1. # First challenge [interactive-photo-gallery-challenge]

Making interactive photo gallery with hover state I used used self hosted image from unsplash that are in asset/images folder

**_Features_**

.Images with transform scale, gray-scale filter and blur filter effect
.Keyframes to animate texts on hover
.2 breakpoints to change text size small screen
.1 breakpoint to remove text on mobile screen

**_Run Challenge_**

.To view result it's simply opening index.html file in any browser

2.  # Second Challenge [array-Manipulation]

Checking for matching sum to target given from given array sub-arrays using O(n) time complexity and O(1) space complecity.

step1: initialize two pointers, start and end which determine start and end of sliding window
step2: iterate through the array using the end pointer, continuously adding elements to the current sum.
step3: the current sum exceeds the target, we start incrementing the start pointer and subtract the value at beginning of array from the current sum until the sum is less than or equal to the target.

step4: return true If the current sum equals the target.
step5: If we finish iterating through the array and haven't found a subarray with the sum equal to the target, we return False.

**This approach ensures linear time complexity because we iterate through the array only once, and constant space complexity because we only use a fixed amount of additional memory regardless of the input size.**

3. # Third Challenge [string-Transformation]

Transform input string where length is divisible by 3, 5 and 3 && 5

.Started with if divisible by 3 && 5 or 15 becouse always when divisible by 3 and 5 would return with reaching the scenario

## Both challenges 2 and 3 are in same folder [challenges] in root directory, to run it just open [test.html] file all results from both challenges are console logged from there.
