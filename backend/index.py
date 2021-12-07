from flask import Flask, jsonify, request
from dataBase import sqlRequest
from flask_cors import CORS
app = Flask(__name__)
CORS(app)


def generateTupliInDate(data, columns):
    return [
        {colum: diseasesItem[key] for key, colum in enumerate(columns)}
        for diseasesItem in data
    ]


@app.route('/')
def index():
    return 'Hello World'


@app.route('/api/diseases')
def diseases():
    phamancy = request.args.get('phamancy')
    if not phamancy:
        all_diseases = sqlRequest(
            "SELECT id_diseases, diseases_name, diseases_descriptions FROM diseases")
        diseases_columns = ('id', 'name', 'descriptions')
        return jsonify(generateTupliInDate(all_diseases, diseases_columns))
    else:
        phamancy_inf = sqlRequest(f"""
                                    SELECT medication.name_med, medication.img, medication.form_med FROM diseases 
                                    INNER JOIN medication_diseases ON medication_diseases.id_diseases = diseases.id_diseases
                                    INNER JOIN medication ON medication.id_med = medication_diseases.id_med
                                    WHERE diseases.diseases_name = '{phamancy}'
                                    """)
        # generateTupliInDate(phamancy_inf, ('name', 'form'))
        return jsonify(generateTupliInDate(phamancy_inf, ('name', 'img', 'form')))


@app.route('/api/sideeffects')
def sideEffects():
    medication = 'Нурофен'
    if(request.args.get('medication')):
        medication = request.args.get('medication')
    side_effects_inf = sqlRequest(f""" 
                    SELECT sideeffects.name_sideEffects FROM medication
                    INNER JOIN medication_sideeffects ON medication_sideeffects.id_med = medication.id_med
                    INNER JOIN sideeffects ON sideeffects.id_sideEffects = medication_sideeffects.id_sideEffects
                    WHERE medication.name_med = '{medication}'
                """)
    return jsonify(generateTupliInDate(side_effects_inf, ('name',)))

if __name__ == "__main__":
    app.run(debug=True)
