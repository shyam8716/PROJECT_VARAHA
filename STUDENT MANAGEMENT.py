#Project-1 (Education Field – Student Management)
section=[]
#appending 8 students
section.append('R.megha shyam')
section.append("shaik.saif ali")
section.append("K. sai venkata pranush")
section.append("S. teja")
section.append("K. hima babu")
section.append("vaishnav")
section.append("khadeer")
section.append("rohith")
#displaying 8 students in list
print(section)
#indexing particular student in section list
print(section[0])
print(section[7])
print(section[0:])
print(section[-6:])
#inserting new student in section list
section.insert(5,"girish")
print(section)
#using len to find the total number of students in section list
print(len(section))
#using  slicing to show a subset of students (e.g., first 3 toppers).
print(section[0:3])
print(section[0::2])
print(section[0:3:2])