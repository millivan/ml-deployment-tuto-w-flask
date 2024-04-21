import pickle

import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier

df = pd.read_csv("./be/diabetes.csv")
X = df.drop("Outcome", axis=1)
y = df["Outcome"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

knn = KNeighborsClassifier()
knn.fit(X_train, y_train)

# knn_score = knn.score(X_test, y_test)
# print(knn_score)

pickle.dump(knn, open("example_weights_knn.pkl", "wb"))
