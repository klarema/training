
# day 1: Create a program that swaps the values of two variables.
# value1 = input("Set value 1 (eg a name): ")
# print("Value 1 = " + value1)
# value2 = input("Set value 2 (eg a name): ")
# print("Value 2 = " + value2)
# value1, value2 = value2, value1
# print("Switch values 1 and 2: This is value 1 - " + value1 + ", and this is value 2 - " + value2)

# day 2: a program to calculate the area of a circle given its radius.
# radius = int(input("Enter radius: "))
# def calcCircleArea(radius):
#     area = radius * 3.14
#     return area
# print(calcCircleArea(radius))

# day 3: Write a function to count the number of vowels in a given string
myString = input("Enter name: ")
def getVowelCount(myString):
    count = 0
    for x in myString:
        if x == 'a' or x == 'e' or x == 'i' or x == 'o' or x == 'u':
            count += 1
    return count
print(getVowelCount(myString))
