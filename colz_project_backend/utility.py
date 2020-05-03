import pickle
import pandas as pd
import matplotlib.pyplot as plt

import colz_project_backend.mygraph as graph
# import mygraph as graph

def numbers_to_strings(argument):
    try:
        switcher = {
            0: "zero",
            1: "SEX OFFENSE",
            2: "CRIMINAL DAMAGE",
            3: 'NARCOTICS',
            4: 'THEFT',
            5: 'BATTERY',
            6: 'MOTOR VEHICLE THEFT',
            7: "ASSAULT",
            8: 'OTHER OFFENSE',
            9: 'CRIMINAL TRESPASS',
            10: 'DECEPTIVE PRACTICE',
            11: 'WEAPONS VIOLATION',
            12: 'BURGLARY',
            13: 'PROSTITUTION',
            14: 'ROBBERY',
            15: 'OFFENSE INVOLVING CHILDREN',
            16: 'CRIM SEXUAL ASSAULT',
            17: 'LIQUOR LAW VIOLATION',
            18: 'INTERFERENCE WITH PUBLIC OFFICER',
            19: 'PUBLIC PEACE VIOLATION',
            20: 'GAMBLING',
            21: 'ARSON',
            22: 'KIDNAPPING',
            23: 'HOMICIDE',
            24: 'OBSCENITY',
            25: 'STALKING',
            26: 'INTIMIDATION',

        }
        return switcher.get(argument, "nothing")
    except Exception as e:
        print('Error while converting result no to string ::',e)

def get_Graph_Images(argument):
    try:
        switcher = {
            # 'arrest':  'http://localhost:5000/static/images/ArrestDataPieChart.png',
            # 'crime': 'http://localhost:5000/static/images/CrimeFrequencyBarGraph.png',
            # 'year': 'http://localhost:5000/static/images/CrimeYearDataBarGraph.png',
            # 'domestic': 'http://localhost:5000/static/images/DomesticDataPieChart.png',
            # 'district' :'http://localhost:5000/static/images/DistrictFrequencyBarGraph.png',
            # 'hour' :'http://localhost:5000/static/images/HourDayFrequencyBarGraph.png',
            # 'month': 'http://localhost:5000/static/images/MonthsFrequencyBarGraph.png',
            # 'week' :'http://localhost:5000/static/images/WeekDayFrequencyBarGraph.png',

            'arrest': graph.generate_Arrest_Graph(),
            'crime': graph.generate_CrimeFrequency_Graph(),
            'year': graph.generate_Year_Graph(),
            'domestic': graph.generate_Domestic_Graph(),
            'district': graph.generate_District_Graph(),
            'hour': graph.generate_Hour_Graph(),
            'month': graph.generate_Month_Graph(),
            'week': graph.generate_Week_Graph(),

        }
        return switcher.get(argument, "nothing")
    except Exception as e:
        print('Error while getting image url ::',e)



def loadModel(filePath):
    try:
        print(filePath)
        file = open(filePath, 'rb')
        model = pickle.load(file)
        print('Model', model)
        file.close()
        return model
    except Exception as e:
        print('Error to load model :: ', e)