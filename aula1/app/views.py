import json

from django.shortcuts import render
from django.http import HttpRequest, HttpResponse
from datetime import datetime
import json

# Create your views here.
def hello(request):
    return HttpResponse("Hello World!!!")


def numero(request, num):
    resp = "<html><body><h1>{}</h1></body></html>".format(num)
    return HttpResponse(resp)


def numerot(request, num):
    tparams = {
        'num_arg': num,
    }
    return render(request, 'numerot.html', tparams)


def eurocv(request, nome):
    f = open("app/data/eurocv.json")
    txt = f.read()
    data = json.loads(txt)
    f.close()
    print(data)
    tparams = {
        'cv': data,
    }
    return render(request, 'eurocv.html', tparams)


