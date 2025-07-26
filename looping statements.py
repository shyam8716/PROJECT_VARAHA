n = int(input("Enter number of students: "))

highest_total = 0
lowest_total = 1000
topper = ""
weakest = ""

for i in range(n):
    student_name = input("Enter student name: ")
    marks1 = int(input("Enter marks1: "))
    marks2 = int(input("Enter marks2: "))
    marks3 = int(input("Enter marks3: "))
    
    total = marks1 + marks2 + marks3
    average = total / 3

    print("Student:", student_name, "Total:", total, "Average:", average)

    if total > highest_total:
        highest_total = total
        topper = student_name

    if total < lowest_total:
        lowest_total = total
        weakest = student_name

print()
print("----- Summary -----")
print("Highest Scorer:", topper, "with", highest_total, "marks")
print("Weakest Scorer:", weakest, "with", lowest_total, "marks")