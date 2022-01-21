from flask import Flask, request, make_response, app, Blueprint
from flask import jsonify
from flask_cors import cross_origin
from tokenizer import PyviTokenizer
from tokenizer import UndertheseaTokenizer
from tokenizer import VnCoreNLPTokenizer

tokenizer_api = Blueprint(name='nlp', import_name=__name__, url_prefix="/api/v1")


@tokenizer_api.route("word", methods=['POST'])
@cross_origin(origin='*', headers=['Access-Control-Allow-Origin', 'Content-Type'])
def tokenize():
    sentences = request.json['documents']
    list_result = []
    for item in sentences:
        list_result.append({"vncore": VnCoreNLPTokenizer.tokenize(item),
                            "underthesea": UndertheseaTokenizer.tokenize(item),
                            "pyvi": PyviTokenizer.tokenize(item)})

    return make_response(jsonify({'result': list_result}), 200)


@tokenizer_api.route("postag", methods=['POST'])
@cross_origin(origin='*', headers=['Access-Control-Allow-Origin', 'Content-Type'])
def postag():
    sentences = request.json['documents']
    list_result = []
    for item in sentences:
        list_result.append({"vncore": VnCoreNLPTokenizer.postag(item),
                            "underthesea": UndertheseaTokenizer.postag(item),
                            "pyvi": PyviTokenizer.postag(item)})

    return make_response(jsonify({'result': list_result}), 200)
