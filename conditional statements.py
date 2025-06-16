#Basic if-else questions:
#Write a python program that checks if a number is positive/negative/zero.
a=int(input("enter a value:"))
if a==0:
    print(a,":value is zero")
elif a>0:
        print(a,":value is positive")
elif a<0:
        print(a,":value is negative")
else:
    pass
#Write a program that checks wheather a given number is even/odd.
b=int(input("enter b value:"))
if b%2==0:
      print(b,":value is even")
elif b%1==0:
      print(b,":value is odd")
else:
      pass
#Write a program to determine if a person is eligible to vote (age must be 18 or above).
c=int(input("enter c value:"))
if c>=18:
      print(c,":you are elgible for vote")
elif c==15:
      print(c,":you want to take permission from your parents/guardian")
else:
      print(c,":you are not elgible for vote")