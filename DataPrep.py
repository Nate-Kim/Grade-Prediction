import pandas as pd

def load_math_dataset():
    full_dataset = pd.read_csv("Math-Students.csv", sep=",")

    # Change output label to average of grades
    grades = ['G1', 'G2', 'G3']
    full_dataset['G_avg'] = full_dataset[grades].mean(axis=1)
    full_dataset = full_dataset.drop(columns=grades)

    # Split X and y for complex dataset (all non-correlated features)
    correlation_drop = ['Dalc', 'Walc', 'Fedu']
    complex_dataset = full_dataset.drop(columns=correlation_drop)
    cData_X = complex_dataset.drop("G_avg", axis=1)
    cData_y = complex_dataset["G_avg"]
    cData_X = pd.get_dummies(cData_X, drop_first=False)  # one-hot encode categorical features

    # Split X and y for simple dataset (only features with highest G_avg correlation)
    best_features = ['failures', 'Medu', 'goout', 'age', 'studytime', 'traveltime']
    simple_dataset = complex_dataset[best_features + ['G_avg']]
    sData_X = simple_dataset.drop("G_avg", axis=1)
    sData_y = simple_dataset["G_avg"]
    sData_X = pd.get_dummies(sData_X, drop_first=False)  # one-hot encode categorical features

    # Split X and y for the mlp model
    mlp_features = ['Medu', 'failures', 'studytime', 'goout', 'age', 'schoolsup', 'internet']
    mlp_dataset = complex_dataset[mlp_features + ['G_avg']]
    mlpData_X = mlp_dataset.drop("G_avg", axis=1)
    mlpData_Y = mlp_dataset["G_avg"]
    mlpData_X = pd.get_dummies(mlpData_X, drop_first=False)  # one-hot encode categorical features

    return cData_X, cData_y, sData_X, sData_y, mlpData_X, mlpData_Y