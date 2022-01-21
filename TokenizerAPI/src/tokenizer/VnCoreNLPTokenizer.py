from vncorenlp import VnCoreNLP


annotator = VnCoreNLP(
    "C:\\Users\\hoang\\Downloads\\VnCoreNLP-master\\VnCoreNLP-master\\VnCoreNLP-1.1.1.jar",
    annotators="wseg,pos,ner,parse", max_heap_size='-Xmx2g')

def tokenize(sentence):
    str_vncore = ""
    for listElement in annotator.tokenize(sentence):
        for text in listElement:
            str_vncore = str(str_vncore) + " " + str(text)
    return str_vncore


def postag(sentence):
    str_vncore = ""
    for text in annotator.pos_tag(sentence):
        for text_in_list in text:
            str_vncore = str_vncore + str(text_in_list)
    return str_vncore

print(tokenize('haha'))