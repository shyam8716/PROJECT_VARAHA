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
#Write a program that asks the user for a password. If the password is "Python123", print "Access granted", otherwise print "Access denied".
d=str(input("enter d value:"))
print("user name:",d)
e=str(input("enter e value:"))
if e=="python123":
      print("access granted")
else:
      print("access denied")
#If-elif-else statements
#Write a program that checks if a given year is a leap year or not.
f=int(input("enter f value:"))
if  f%400==0:
      print(f,"is a leap year")
elif f%400!=400:
      print(f," is a non leap year")
else:
      print(f,"none of the above")
# Write a program that asks the user to enter marks and assigns grades as follows:
# 90-100: A
# 80-89: B
# 70-79: C
# 60-69: D
# Below 60: F
g=int(input("enter g value:"))
if g<=100 and g==90:
      print(g,"A-TOPPER")
elif g<=80 and g==89:
      print(g,"B-BELOW TOPPER")
elif g<=70 and g==79:
      print(g,"C-AVERGE")
elif g<=60 and g==69:
      print(g,"D-BELOW AVERAGE")
elif g>60:
      print(g,"F-POOR")
else:
      print(g,"VERY POOR")

