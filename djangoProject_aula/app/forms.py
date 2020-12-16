from django import forms

# Create your forms here
class BookQueryForm(forms.Form):
    query = forms.CharField(label="Search:", max_length=100)

class AuthorQueryForm(forms.Form):
    query = forms.CharField(label="Search for an author:", max_length=50)