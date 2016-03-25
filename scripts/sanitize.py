# Reads data.son and sanitizes the file
import json


def save_json(j, filename):
    with open(filename, 'wb') as o:
        json.dump(j, o, sort_keys=True, indent=4)
        o.write('\n')


def read_json(filename):
    with open(filename) as f:
        j = json.loads(f.read())
        return j


def fix_keywords(j):
    for key, value in j.iteritems():
        k = value.get('keywords')
       
        if k is not None and (type(k) == unicode or type(k) == str):
            value['keywords'] = [k]


def fix_authors(j):
    types = set([])
    for key, value in j.iteritems():
        k = value.get('authors')
        if k is not None:
            types.add(type(k[0]))
            if type(k[0]) != unicode and type(k[0]) != str:
                value['authors'] = None
    print types


j = read_json('data.json')
fix_keywords(j)
fix_authors(j)
save_json(j, 'data-updated.json')
