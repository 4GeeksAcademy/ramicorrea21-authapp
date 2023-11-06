"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

@api.route('/singup', methods=['POST'])
def singup():
    body = request.json
    email = body.get("email")
    password = body.get("password")
    
    if email is None or password is None:
        return jsonify({"message": "bad credentials"}), 400
    
    return([])