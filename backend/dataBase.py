import pymysql
from dataBaseInfo import *
def sqlRequest(sqlText: str) -> list:
    try:
        result = []
        con = pymysql.connect(host=HOST_NAME, user=USER_NAME,
                              password=PASSWORD, database=DATABASE)
        with con.cursor() as cursor:
            cursor.execute(sqlText)
            result = cursor.fetchall()
        return result
    except Exception as Errror:
        print(Errror)
    finally:
        con.close()