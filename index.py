from flask import Flask,render_template,request,redirect, url_for
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user
import random


app = Flask(__name__, template_folder="src")
login_manager = LoginManager()
login_manager.login_view = "http://127.0.0.1:5000/form" #page error
login_manager.init_app(app)
app.config.update(
    SECRET_KEY = 'iO'
)
io = {
    'email': 'senpai9464@yandex.ru',
    'password': '7q8q1579',
    'name': 'io',
}

class User(UserMixin):
    def __init__(self, id):
        self.id = id
@login_manager.user_loader
def load_user(user_id):
    return User(user_id)


@app.route('/app/')
@login_required
def index():
    statick = [
        {
        'invalid': 'none',
        }
    ]
    return render_template('app.html', statick=statick)


@app.route('/progress/')
@login_required
def progress():
     return render_template('progress.html')







@app.route('/price/')
@login_required
def price_list():
    price = [
        {
        'price': '1500',
        'name_price_tag': 'Premium',
        'description': 'lorem ipsum dolor sit am',
        },
        {
            'price': '1000',
            'name_price_tag': 'Vip',
            'description': 'lorem ipsum dolor sit am',
        },
        {
            'price': '500',
            'name_price_tag': 'Standart',
            'description': 'lorem ipsum dolor sit am',
        },
    ]
    
    return render_template('price.html', props = price)

@app.route('/products/')
@login_required
def products():
    return render_template('products.html')

@app.route('/contact/')
@login_required
def contacts():
    return render_template('contact.html')

@app.route('/form/' )
def form_get():
    img = [
        {
        'image_one': '',
        'image_three': '',
        'image_four': '',
        'image_five': '',
        'image_six': '',
        'image_seven': '',
        }
    ]  
    return render_template('form.html', img = img)
@app.route('/login/', methods=['POST'])
def login_post_form():
    print(request.form)
    if request.form['email'] != io['email']:
        return render_template('form.html', error = 'not email address') #errors
    if request.form['password'] != io['password']:
        return render_template('form.html', error = 'wrong password')
    _user = User(request.form['email'])
    login_user(_user)


    return redirect("http://127.0.0.1:5000/app")

# @app.route('/calc/<int:a>/<int:b>/')
# def calc(a, b):
#     return f'{a} + {b} = {a + b}<br />{a} - {b} = {a - b}<br />' \
#            f'{a} * {b} = {a * b}<br />{a} / {b} = {a / b}<br />' \
#            f'{a} // {b} = {a // b}<br />{a} % {b} = {a % b}'

# @app.route('/<a>')
# def f(a):
#     a=a.replace(':','/')
#     a=a.replace('^','**')
#     return a + '=' + str(eval(a))
@app.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect("http://127.0.0.1:5000/form")

@app.route('/error/')
@login_required
def error():
    return render_template("error404.html")


if __name__ == "__main__":
    app.run()
