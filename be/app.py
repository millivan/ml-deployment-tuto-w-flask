import pickle

import pandas as pd
from flask import Flask, redirect, render_template, request, url_for

app = Flask(__name__)


# @app.route("/")
# def greeting():
#     return "Flask is Awesome!"
model = pickle.load(open("example_weights_knn.pkl", "rb"))


@app.route("/")
def use_template():
    return render_template("index.html")


@app.route("/predict", methods=["POST", "GET"])
def predict():
    input_one = request.form["1"]
    input_two = request.form["2"]
    input_three = request.form["3"]
    input_four = request.form["4"]
    input_five = request.form["5"]
    input_six = request.form["6"]
    input_seven = request.form["7"]
    input_eight = request.form["8"]

    setup_df = pd.DataFrame(
        [
            pd.Series(
                [
                    input_one,
                    input_two,
                    input_three,
                    input_four,
                    input_five,
                    input_six,
                    input_seven,
                    input_eight,
                ]
            )
        ]
    )
    diabetes_prediction = model.predict_proba(setup_df)
    output = "{0:.{1}f}".format(diabetes_prediction[0][1], 2)
    output = float(output)

    if output > 0.5:
        return render_template("result.html", pred="Yes")
    else:
        return render_template("result.html", pred="No")


if __name__ == "__main__":
    app.run(debug=True)
