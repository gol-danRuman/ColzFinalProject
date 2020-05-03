import pickle
import pandas as pd
import matplotlib.pyplot as plt
from datetime import datetime

datafile = "./data/data100000.obj"


def generate_Year_Graph():
    try:
        file = open(datafile, 'rb')
        df = pickle.load(file)
        file.close()
        crimes = df['Primary Type']
        year = df['Year']
        plt.figure(figsize=(20, 10))
        plt.bar(year.value_counts().index, year.value_counts().values, align='center', alpha=0.5)
        plt.xticks(year.value_counts().index, year.value_counts().index)
        plt.ylabel('No. of Crimes', fontsize=20)
        plt.xlabel('Year', fontsize=20)
        plt.rcParams.update({'font.size': 15})
        plt.title('Crimes based on year', fontsize=30)
        plt.savefig('./static/test/CrimeYearDataBarGraph.png', dpi=100)




        return  'http://localhost:5000/static/test/CrimeYearDataBarGraph.png'
    except Exception as e:
        print('Exception', e)

def generate_Domestic_Graph():
    try:
        file = open(datafile, 'rb')
        df = pickle.load(file)
        file.close()
        crimes = df['Primary Type']
        domestic = df['Domestic']
        falseFreq = domestic.describe().freq
        labels = 'Domestic', 'InterNational'
        sizes = [domestic.count() - falseFreq, falseFreq]
        explode = (0, 0)  # only "explode" the 2nd slice (i.e. 'Hogs')

        fig1, ax1 = plt.subplots()
        ax1.pie(sizes, explode=explode, labels=labels, autopct='%1.1f%%',
                shadow=True, startangle=90)
        ax1.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.

        fig1.savefig('./static/test/DomesticDataPieChart.png', dpi=100)




        return  'http://localhost:5000/static/test/DomesticDataPieChart.png'
    except Exception as e:
        print('Exception', e)

def generate_Arrest_Graph():
    try:
        file = open(datafile, 'rb')
        df = pickle.load(file)
        file.close()
        crimes = df['Primary Type']
        arrest = df['Arrest']
        falseFreq = arrest.describe().freq
        labels = 'Arrest', 'NotArrested'
        sizes = [arrest.count() - falseFreq, falseFreq]
        explode = (0, 0)  # only "explode" the 2nd slice (i.e. 'Hogs')

        fig1, ax1 = plt.subplots()
        ax1.pie(sizes, explode=explode, labels=labels, autopct='%1.1f%%',
                shadow=True, startangle=90)
        ax1.axis('equal')
        fig1.savefig('./static/test/ArrestDataPieChart.png', dpi=100)



        return  'http://localhost:5000/static/test/ArrestDataPieChart.png'
    except Exception as e:
        print('Exception', e)

def generate_Month_Graph():
    try:
        file = open(datafile, 'rb')
        df = pickle.load(file)
        file.close()
        crimes = df['Primary Type']
        date_list = df['Date'].tolist()
        month_list = []
        for date_str1 in date_list:
            date = datetime.strptime(date_str1, '%m/%d/%Y %H:%M:%S %p')
            month_list.append(date.month)
        df["Months"] = month_list
        months = df['Months'].value_counts()
        months = {1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June', 7: 'July', 8: 'August',
                  9: 'September', 10: 'October', 11: 'November', 12: 'December'}
        month_dict = df["Months"].value_counts().rename(index=months)
        plt.figure(figsize=(20, 15))
        plt.bar(month_dict.index, month_dict.values, align='center', alpha=0.5, width=0.5)
        plt.xticks(month_dict.index, month_dict.index)
        plt.ylabel('No. of Crimes', fontsize=20)
        plt.xlabel('Name of Month', fontsize=20)

        plt.rcParams.update({'font.size': 15})
        plt.xticks(rotation=90)
        plt.title('Criminal Activity Occuring Different Months', fontsize=30)

        plt.savefig('./static/test/MonthsFrequencyBarGraph.png', dpi=100)


        return  'http://localhost:5000/static/test/MonthsFrequencyBarGraph.png'
    except Exception as e:
        print('Exception', e)

def generate_District_Graph():
    try:
        file = open(datafile, 'rb')
        df = pickle.load(file)
        file.close()
        crimes = df['Primary Type']
        district = df['District'].value_counts()
        district = {01.00: 'Rogers Park',
                    02.00: 'West Ridge',
                    03.00: 'Uptown',
                    04.00: 'Lincoln Square',
                    05.00: 'North Center',
                    06.00: 'Lake View',
                    07.00: 'Lincoln Park',
                    08.00: 'Near North Side',
                    09.00: 'Edison Park',
                    10.00: 'Norwood Park',
                    11.00: 'Jefferson Park',
                    12.00: 'Forest Glen',
                    13.00: 'North Park',
                    14.00: 'Albany Park',
                    15.00: 'Portage Park',
                    16.00: 'Irving Park',
                    17.00: 'Dunning',
                    18.00: 'Montclare',
                    19.00: 'Belmont Cragin',
                    20.00: 'Hermosa',
                    21.00: 'Avondale',
                    22.00: 'Logan Square',
                    23.00: 'Humboldt Park',
                    24.00: 'West Town',
                    25.00: 'Austin',
                    26.00: 'West Garfield Park',
                    27.00: 'East Garfield Park',
                    28.00: 'Near West Side',
                    29.00: 'North Lawndale',
                    30.00: 'South Lawndale',
                    31.00: 'Lower West Side',
                    32.00: 'Loop',
                    33.00: 'Near South Side',
                    34.00: 'Armour Square',
                    35.00: 'Douglas',
                    36.00: 'Oakland',
                    37.00: 'Fuller Park',
                    38.00: 'Grand Boulevard',
                    39.00: 'Kenwood',
                    40.00: 'Washington Park',
                    41.00: 'Hyde Park',
                    42.00: 'Woodlawn',
                    43.00: 'South Shore',
                    44.00: 'Chatham',
                    45.00: 'Avalon Park',
                    46.00: 'South Chicago',
                    47.00: 'Burnside',
                    48.00: 'Calumet Heights',
                    49.00: 'Roseland',
                    50.00: 'Pullman',
                    51.00: 'South Deering',
                    52.00: 'East Side',
                    53.00: 'West Pullman',
                    54.00: 'Riverdale',
                    55.00: 'Hegewisch',
                    56.00: 'Garfield Ridge',
                    57.00: 'Archer Heights',
                    58.00: 'Brighton Park',
                    59.00: 'McKinley Park',
                    60.00: 'Bridgeport',
                    61.00: 'New City',
                    62.00: 'West Elsdon',
                    63.00: 'Gage Park',
                    64.00: 'Clearing',
                    65.00: 'West Lawn',
                    66.00: 'Chicago Lawn',
                    67.00: 'West Englewood',
                    68.00: 'Englewood',
                    69.00: 'Greater Grand Crossing',
                    70.00: 'Ashburn',
                    71.00: 'Auburn Gresham',
                    72.00: 'Beverly',
                    73.00: 'Washington Heights',
                    74.00: 'Mount Greenwood',
                    75.00: 'Morgan Park'
                    }
        district_dict = df["District"].value_counts().rename(index=district)
        plt.figure(figsize=(20, 15))
        plt.bar(district_dict.index, district_dict.values, align='center', alpha=0.5, width=0.5)
        plt.xticks(district_dict.index, district_dict.index)
        plt.ylabel('No. of Crimes', fontsize=20)
        plt.xlabel('Name of District', fontsize=20)
        plt.rcParams.update({'font.size': 15})
        plt.xticks(rotation=90)
        plt.title('Criminal Activity Occuring Different Police District', fontsize=30)

        plt.savefig('./static/test/DistrictFrequencyBarGraph.png', dpi=100)


        return  'http://localhost:5000/static/test/DistrictFrequencyBarGraph.png'
    except Exception as e:
        print('Exception', e)

def generate_Hour_Graph():
    try:
        file = open(datafile, 'rb')
        df = pickle.load(file)
        file.close()
        crimes = df['Primary Type']
        date_list = df['Date'].tolist()
        hour_list = []
        for date_str1 in date_list:
            date = datetime.strptime(date_str1, '%m/%d/%Y %H:%M:%S %p')
            hour_list.append(date.hour)
        df["Hours"] = hour_list
        hours_dict = df['Hours'].value_counts()
        hours_dict = df['Hours'].value_counts()
        # weekday_dict = {0:"Sunday", 1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thurday", 5:"Friday", 6:"Saturday"}
        # week_days = df["WeekDay"].value_counts().rename(index=weekday_dict)
        # week_days.values
        plt.figure(figsize=(20, 15))
        plt.bar(hours_dict.index, hours_dict.values, align='center', alpha=0.5, width=0.5)
        plt.xticks(hours_dict.index, hours_dict.index)
        plt.ylabel('No. of Crimes', fontsize=20)
        plt.xlabel('Hours in 12-hour ', fontsize=20)
        plt.rcParams.update({'font.size': 15})
        plt.title('Criminal Activity Occuring Different Hour of a Day', fontsize=30)
        plt.savefig('./static/test/HourDayFrequencyBarGraph.png', dpi=100)


        return  'http://localhost:5000/static/test/HourDayFrequencyBarGraph.png'
    except Exception as e:
        print('Exception', e)

def generate_Week_Graph():
    try:
        file = open(datafile, 'rb')
        df = pickle.load(file)
        file.close()
        crimes = df['Primary Type']
        date_list = df['Date'].tolist()
        week_days_list = []
        for date_str1 in date_list:
            date = datetime.strptime(date_str1, '%m/%d/%Y %H:%M:%S %p')
            week_days_list.append(date.weekday())
        df["WeekDay"] = week_days_list
        df['WeekDay'].value_counts().index
        weekday_dict = {0: "Sunday", 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thurday", 5: "Friday",
                        6: "Saturday"}
        week_days = df["WeekDay"].value_counts().rename(index=weekday_dict)

        plt.figure(figsize=(20, 15))
        plt.bar(week_days.index, week_days.values, align='center', alpha=0.5, width=0.5)
        plt.xticks(week_days.index, week_days.index)
        plt.ylabel('No. of Crimes', fontsize=20)
        plt.xlabel('Week Days', fontsize=20)
        plt.rcParams.update({'font.size': 15})
        plt.title('Crimes occuring in different days of the week', fontsize=30)
        plt.savefig('./static/test/WeekDayFrequencyBarGraph.png', dpi=100)

        return  'http://localhost:5000/static/test/WeekDayFrequencyBarGraph.png'
    except Exception as e:
        print('Exception', e)


def generate_CrimeFrequency_Graph():
    try:
        file = open(datafile, 'rb')
        df = pickle.load(file)
        file.close()
        crimes = df['Primary Type']

        plt.figure(figsize=(20, 15))
        plt.bar(df['Primary Type'].value_counts().index, df['Primary Type'].value_counts().values, align='center',
                alpha=0.5)
        plt.xticks(df['Primary Type'].value_counts().index, df['Primary Type'].value_counts().index)
        plt.ylabel('No. of Crimes', fontsize=20)
        plt.xlabel('Crimes Names', fontsize=20)
        plt.xticks(rotation=90)
        plt.rcParams.update({'font.size': 15})
        plt.title('Frequency of Crime Categories', fontsize=30)
        plt.savefig('./static/test/CrimeFrequencyBarGraph.png', dpi=100)

        return  'http://localhost:5000/static/test/CrimeFrequencyBarGraph.png'
    except Exception as e:
        print('Exception', e)