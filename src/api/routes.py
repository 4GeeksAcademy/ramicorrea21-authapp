"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token

api = Blueprint('api', __name__)

@api.route('/singup', methods=['POST'])
def singup():
    body = request.json
    email = body.get("email")
    password = body.get("password")
    
    if email is None or password is None:
        return jsonify({"message": "bad credentials"}), 400
    user = User.query.filter_by(email=email).one_or_none()
    if user is not None:
        return jsonify({"message":"this user is already registered"}), 400
    else:
        password = generate_password_hash(password)
        user = User(email=email, password=password)
        db.session.add(user)
    try:
        db.session.commit()
        return jsonify({"message": "user created"}),201
    except Exception as error:
        return jsonify({"error": f"{error}"})
    
@api.route('/login', methods=['POST'])
def login():
    body = request.json
    email = body.get("email")
    password = body.get("password")

    if email is None or password is None:
        return jsonify({"message": "bad credentials"}), 400
    user = User.query.filter_by(email=email).one_or_none()
    if user is None:
        return jsonify({"message": "email or password are incorrect"}), 400
    else:
        if check_password_hash(user.password, password):
            token = create_access_token(identity = user.id)
            return jsonify({"token":f"{token}"})
        else:
            return jsonify({"message": "email or password are incorrect"}), 400
        
        