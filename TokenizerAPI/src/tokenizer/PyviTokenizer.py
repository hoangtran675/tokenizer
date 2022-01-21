from pyvi import ViTokenizer, ViPosTagger


def tokenize(sentence):
    return ViTokenizer.tokenize(sentence)


def postag(sentence):
    str_pyvi = ""
    pyvi_postag = ViPosTagger.postagging(ViTokenizer.tokenize(sentence))
    for i in range(len(pyvi_postag[0])):
        str_pyvi = str_pyvi + str((pyvi_postag[0][i], pyvi_postag[1][i]))
    return str_pyvi
