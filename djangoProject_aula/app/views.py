from django.shortcuts import render, redirect
from app.models import Author, Publisher, Book
from django.http import HttpResponse
from app.forms import BookQueryForm
from app.forms import AuthorQueryForm

# Create your views here.

def index(request):
    return render(request, 'index.html')

def getBooks(request):
    parametros = {
        'books': Book.objects.all()
    }
    return render(request, 'livros.html', parametros)

def getBookDetails(request, bookid):
    parametros = {
        'book': Book.objects.get(id=bookid)
    }
    return render(request, 'livroDetalhes.html', parametros)

def getAuthors(request):
    parametros = {
        'authors': Author.objects.all()
    }
    return render(request, 'autores.html', parametros)

def info(request):
    values = request.META.items()
    html = []
    for k,v in values:
        html.append('<tr><td>%s</td><td>%s</td></tr>' % (k, v))
    return HttpResponse('<table>%s</table>' % '\n'.join(html))

def booksearch(request):
    if 'query' in request.POST:
        query = request.POST['query']
        if query:
            books = Book.objects.filter(title__icontains = query)
            return render(request, 'booklist.html', {'books': books, 'query': query})
        else:
            return render(request, 'booksearch.html', {'error': True})
    else:
        return render(request, 'booksearch.html', {'error': False})

def bookquery(request):
    # if POST request, process from data
    if request.method == 'POST':
        #create form instance and pass data to it
        form = BookQueryForm(request.POST)
        if(form.is_valid()): # is it valid?
            query = form.cleaned_data['query']
            if 'searched' in request.session and request.session['searched'] == query:
                return HttpResponse('Query already made!!!')
            request.session['searched'] = query
            books = Book.objects.filter(title__icontains=query)
            return render(request, 'booklist.html', {'books': books, 'query':query})
    # if GET (or any other method), create blank form:
    else:
        form = BookQueryForm()
    return render(request, 'bookquery.html', {'form': form})

def authorquery(request):
    if not request.user.is_authenticated or request.user.username != 'admin':
        return redirect('/login')
    if request.method == 'POST':
        form = AuthorQueryForm(request.POST)
        if(form.is_valid()):
            query = form.cleaned_data['query']
            authors = Author.objects.filter(name__icontains=query)
            return render(request, 'authorlist.html', {'authors': authors, 'query':query})
    else:
        form = AuthorQueryForm()
    return render(request, 'authorquery.html', {'form':form})






