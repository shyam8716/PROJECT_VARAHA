#project-2 (Business Field – Employee Management)
full_stack_branch=[]
data_analysis_branch=[]
full_stack_branch.append("R.Megha Shyam")
full_stack_branch.append("D.Neelima")
print(full_stack_branch)
data_analysis_branch.append("Geetha")
data_analysis_branch.append("Bhavya")
data_analysis_branch.append("Vishnu Sai")
data_analysis_branch.append("Nithin Reddy")
data_analysis_branch.append("Pranay")
print(data_analysis_branch)
#copying full_stack_branch list into sri_vency_company variable
sri_vency_company=full_stack_branch.copy()
#merging full_stack_branch list(sri_vency_company list) and data_analysis_baranch into sri_vency_variable using extend function
sri_vency_company.extend(data_analysis_branch)
print(sri_vency_company)
#removing one employee in merged list using remove function
sri_vency_company.remove("Pranay")
print(sri_vency_company)
#reversing the merged list using reveerse function
sri_vency_company.reverse()
print(sri_vency_company)