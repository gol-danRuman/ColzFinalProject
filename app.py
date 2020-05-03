
# from flask import Flask ,render_template
import pandas as pd
from flask import render_template
import flask as Flask
import matplotlib.pyplot as plt

app = Flask.Flask(__name__)
            # ,
            # static_folder="static",
            # template_folder="/home/fm-pc-lt-64/Documents/colzProject/ColzFinalProject/template")


@app.route('/')
def index():
    return 'started app'

@app.route('/hello')
def hello():
    return "Hello World from python!"

@app.route('/crimetype', methods= ['get'])
def getCrimeTypes():
    input_file = '/home/fm-pc-lt-64/Documents/colzProject/ColzFinalProject/data/chicagoCrimes.csv'
    df = pd.read_csv(input_file, header=0)
    df.head()
    return render_template('view.html',tables=[df.to_html(classes='female')],

    titles = ['na', 'Crime Types'])

@app.route('/piechart', methods = ['get'])
def getPieChart():
    try:
        input_file = '/home/fm-pc-lt-64/Documents/colzProject/ColzFinalProject/data/chicagoCrimes.csv'
        df = pd.read_csv(input_file, header=0)
        df.head()
        primary = df.groupby([df['Primary Type']]).size()
        label = df['Primary Type'].unique()
        values = primary
        plt.pie(values, labels=label, autopct='%1.1f%%', shadow=True, startangle=90, radius=20)
        plt.figure(figsize=(30, 30))
        plt.savefig('/home/fm-pc-lt-64/Documents/colzProject/ColzFinalProject/images/primaryType.png', dpi=100)
        return '/home/fm-pc-lt-64/Documents/colzProject/ColzFinalProject/images/primaryType.png'
    except TypeError:
        print("Error in getpieChart")
        raise


if __name__ == '__main__':
    app.run(debug=True ,host='0.0.0.0', port='5000')