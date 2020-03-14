# Make a MOVE:mini dance

## Introduction @unplugged

In this session you will code a second @boardname@ to send remote control commands to the MOVE:mini robot buggy to make it dance. 

Code is already loaded onto the MOVE:mini and you have been given a printout of that code. Your first job is to look at the code for the buggy and understand how it works so that you can use that knowledge to program your remote control @boardname@.

## Step 1 - Radio Group

Your buggy has your name on one wheel. On the other wheel is a number. This is the **Radio Group** that your buggy is listening for messages on. Your remote control needs to use the same **Radio Group** number.

Use an ``||basic:on start||`` block together with a ``||radio:radio set group (N)||`` block to set the right **Radio Group** for your buggy.

Also add a ``||basic:show arrow||`` block to display and arrow on your remote control @boardname@ so that you can see it's turned on and ready to use.

```blocks
radio.setGroup(100)
basic.showArrow(ArrowNames.North)
```
## Step 2 - The emergency stop!

If you make a mistake in your code then it's possible your buggy will drive and not stop so you'll be chasing around trying to catch it and you could break it. For this reason it's sensible to program an emergency stop. Simply shake your remote at any time and your buggy should stop.
```blocks
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(0)
})
```
Make sure you understand why sending a **0** stops the buggy by looking at the buggy's code.

## Step 3 - Use arrays to define the dance sequence moves and colours

Start with a simple dance of just three moves and colours to send when button ``||A||`` is pressed. You need two arrays:
1. An array which is a list of numbers to hold the moves
2. An array which is a list of text strings to hold the names of the colours

```blocks
input.onButtonPressed(Button.A, function () {
    list = [1, 2, -2]
    text_list = ["red", "blue", "green"]
})
```

### ~hint

#### Remember the numbers the buggy understands

`
0   - stop
1   - drive forwards
2   - turn left
-2  - turn right
`

### ~

## Step 4 - Send the move commands to the buggy

To get a move command you will **pop** the first number from your array of moves using the ``||Arrays:get and remove first value from (list)||`` block. This gives you the first number to send using the ``||radio:radio send number (NUM)||`` block.

Your array will now be one item shorter. You need to keep sending numbers to the buggy until your array is empty. An array is empty when it has a length of zero.

You can send all the numbers in your array using a ``||loops:while <test> do||`` loop block which loops while the length or your array is greater than zero.

```blocks
input.onButtonPressed(Button.A, function () {
    let text_list: string[] = []
    let list: number[] = []
    list = [1, 2, -2]
    text_list = ["red", "blue", "green"]
    while (list.length > 0) {
        radio.sendNumber(list.shift())
        basic.pause(1000)
    }
    radio.sendNumber(0)
})
```
Note that there is a ``||basic:pause (ms)||`` block so that there is a one second delay between sending commands. Also after all the commands are sent there is a ``||radio:radio send number 0||`` block to make sure your buggy stops at the end of the dance.

Test your remote with your buggy and check everything works as you expect.

## Step 5 - Send the colour commands to the buggy

Now add another ``||Arrays:get and remove first value from (text_list)||`` block to **pop** the colour commands from the ``||arrays:text_list||`` array and send them to the buggy using a ``||radio:radio send string (text)||`` block.

## Step 6 - Make a longer dance

Add numbers and colours to your two arrays to make a longer dance. The arrays need to be the same length so make sure the number of moves is always the same as the number of colours.

