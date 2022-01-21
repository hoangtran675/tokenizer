from underthesea import pos_tag
from underthesea import word_tokenize


def tokenize(sentence):
    return word_tokenize(sentence, format="text")


def postag(sentence):
    str_underthesea = ""
    for i in pos_tag(word_tokenize(sentence, format="text")):
        str_underthesea = str_underthesea + str(i)
    return str_underthesea