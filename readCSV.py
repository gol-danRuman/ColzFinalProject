import pandas as pd
'''
read csv file and save the 100 rows of data only
'''

input_file = '/home/fm-pc-lt-64/Documents/colzProject/ColzFinalProject/data/chicagoCrimes.csv'

df = pd.read_csv(input_file, header=0)

file = pd.DataFrame(df.sample(10000))
file.to_csv('/home/fm-pc-lt-64/Documents/colzProject/ColzFinalProject/data/10000.csv', index=False)

'''
print description data
'''
# file = pd.read_csv('100data.csv', header=0)
# print(file['Location'][:])