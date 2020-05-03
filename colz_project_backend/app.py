
import colz_project_backend.utility as utility
# import utility as utility
import pandas as pd
from flask import request,  jsonify, Blueprint, request, Response
import flask as Flask
from flask_cors import CORS,cross_origin
import pickle

app = Flask.Flask(__name__)
cors = CORS(app, resources={r"/": {"origins": "*"}})


filePathKNNModel = './model/All_saved_knn_model_N_100.obj'
filePathLogisticModel = './model/lgr_model_1000.sav'
filePathNaiveBayesModel = './model/multinomialNB_model_1000.sav'
filePathDecisionTreeClassifierModel = './model/dtc_model_1000.obj'
filePathRandomForestClassifierModel = './model/rfc_model_1000.obj'
# filePathLogisticModel = './model/All_saved_knn_model_N_100.obj'

arrestPieChart = 'http://localhost:5000/static/images/ArrestDataPieChart.png'
crimeTypesBarChart = 'http://localhost:5000/static/images/CrimeFrequencyBarGraph.png'
crimeYearBarChart = 'http://localhost:5000/static/images/CrimeYearDataBarGraph.png'
domesticPieChart = 'http://localhost:5000/static/images/DomesticDataPieChart.png'
districtBarChart = 'http://localhost:5000/static/images/DistrictFrequencyBarGraph.png'
hourBarChart = 'http://localhost:5000/static/images/HourDayFrequencyBarGraph.png'
mothsBarChart = 'http://localhost:5000/static/images/MonthsFrequencyBarGraph.png'
weekBarChart = 'http://localhost:5000/static/images/WeekDayFrequencyBarGraph.png'
districtBarChart = 'http://localhost:5000/static/images/DomesticDataPieChart.png'


@app.route('/')
@cross_origin(origin='*')
def index():
    return 'started app'

@app.route('/testData', methods=['GET'])
@cross_origin(origin='*')
def startApplication():
    # data = {'totalCrimes': 6020998, 'totalData': 6020998}
    res = jsonify(
            totalCrimes = 6020998, totalData = 6020998
        )
    # print(res)
    return res

@app.route('/graph', methods=['GET'])
@cross_origin(origin='*')
def getGraph():
    graphType = request.args.get('graphType')
    imageUrl = utility.get_Graph_Images(graphType)
    # print('Url' ,imageUrl)

    return jsonify(
            data = imageUrl
        )

@app.route('/predict', methods= ['GET'])
@cross_origin(origin='*')
def getCrimeTypes():
    try:
        # print('Prediction')
        modelType = request.args.get('model')
        weekDay = request.args.get('weekDay')
        communityArea = request.args.get('communityArea')
        latitude = request.args.get('latitude')
        longitude = request.args.get('longitude')
        data = [(weekDay, communityArea, latitude, longitude)]
        dfObj = pd.DataFrame(data, columns=["WeekDay", "Community Area", "Latitude", "Longitude"])


        if(modelType == 'knn'):
            modelToPredict = utility.loadModel(filePathKNNModel)
            myPredict = modelToPredict.predict(dfObj)
            # print('Model knn ::', modelToPredict)
        elif(modelType == 'lgr'):
            modelToPredict = utility.loadModel(filePathLogisticModel)
            myPredict = modelToPredict.predict(dfObj.iloc[0,:].values.reshape(-1, 4))
        elif (modelType == 'mnb'):
            modelToPredict = utility.loadModel(filePathNaiveBayesModel)
            myPredict = modelToPredict.predict(dfObj.iloc[0, :].values.reshape(-1, 4))
        elif (modelType == 'dtc'):
            modelToPredict = utility.loadModel(filePathDecisionTreeClassifierModel)
            myPredict = modelToPredict.predict(dfObj.iloc[0, :].values.reshape(-1, 4))

        # print('Model lgr ::', modelToPredict)



        print(myPredict[0])
        a = utility.numbers_to_strings(myPredict[0])
        print('Result no::',a)
        res = jsonify( data = a )
        print(res.data)
        return res
        # pass

    except Exception as e:
        print(e)
        pass
        # return jsonify(
        #     e
        # )

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port='5000')

    # utility.loadModel(filePathLogisticModel)

